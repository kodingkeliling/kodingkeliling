"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send01, CheckDone01, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: string;
}

const STORAGE_KEY = "kodingkeliling_chat_history_v2";
const CONVERSATION_KEY = "kodingkeliling_conversation_id";
const USER_ID_KEY = "kodingkeliling_user_id";

export const ContactChatBot = () => {
    const { language } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [userId, setUserId] = useState<string>("");
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initialize User and Conversation
    useEffect(() => {
        let storedUserId = localStorage.getItem(USER_ID_KEY);
        if (!storedUserId) {
            storedUserId = `user-${Math.random().toString(36).slice(2, 11)}`;
            localStorage.setItem(USER_ID_KEY, storedUserId);
        }
        setUserId(storedUserId);

        const storedConvId = localStorage.getItem(CONVERSATION_KEY);
        if (storedConvId) {
            setConversationId(storedConvId);
        }
    }, []);

    // Initial Messages
    const getInitialMessages = (lang: string): Message[] => [
        {
            id: "init-0",
            text: lang === "id" ? "Halo! 👋 Selamat datang di **Koding Keliling**." : "Hello! 👋 Welcome to **Koding Keliling**.",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
            id: "init-1",
            text: lang === "id"
                ? `Saya asisten digital Anda. Ada yang bisa kami bantu mengenai pembuatan **website**, **software kustom**, atau **aplikasi mobile**?\n\natau Anda ingin menghubungi langsung admin kami bisa klik link [di sini](${process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"})`
                : `I'm your digital assistant. How can we help you today with **website development**, **custom software**, or **mobile apps**?\n\nor if you'd like to contact our admin directly, click [here](${process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"})`,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ];

    // Load Chat History
    useEffect(() => {
        const savedChat = localStorage.getItem(STORAGE_KEY);
        if (savedChat) {
            try {
                const parsed = JSON.parse(savedChat);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                } else {
                    setMessages(getInitialMessages(language));
                }
            } catch (e) {
                setMessages(getInitialMessages(language));
            }
        } else {
            setMessages(getInitialMessages(language));
        }
    }, [language]);

    // Save Chat History
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim() || isTyping) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        const query = inputValue;
        setInputValue("");
        setIsTyping(true);

        const botMsgId = "bot-" + Date.now().toString();
        const placeholderMsg: Message = {
            id: botMsgId,
            text: "",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, placeholderMsg]);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query,
                    user: userId,
                    conversation_id: conversationId,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to reach AI");
            }

            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                if (data.error) throw new Error(data.message);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) return;

            let fullAnswer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split("\n");

                for (const line of lines) {
                    if (line.startsWith("data:")) {
                        try {
                            const dataString = line.slice(5).trim();
                            if (!dataString) continue;
                            const data = JSON.parse(dataString);

                            if (data.event === "message") {
                                fullAnswer += data.answer;
                                setMessages(prev =>
                                    prev.map(m => m.id === botMsgId ? { ...m, text: fullAnswer } : m)
                                );
                            }

                            if (data.conversation_id && !conversationId) {
                                setConversationId(data.conversation_id);
                                localStorage.setItem(CONVERSATION_KEY, data.conversation_id);
                            }
                        } catch (e) {
                            // Skip non-JSON or partial chunks
                        }
                    }
                }
            }
        } catch (error: any) {
            console.error(error);
            setMessages(prev =>
                prev.map(m => m.id === botMsgId ? {
                    ...m,
                    text: error.message && error.message.includes("kendala")
                        ? error.message
                        : (language === "id"
                            ? "Maaf, saat ini service sedang ada kendala, anda bisa langsung chat whatsapp kami."
                            : "Sorry, the service is currently experiencing issues. You can chat with us directly via WhatsApp.")
                } : m)
            );
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-1 h-full w-full flex-col overflow-hidden bg-[#e5ddd5] shadow-2xl text-gray-900">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#075e54] p-5 text-white">
                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white p-1 flex items-center justify-center size-10 sm:size-12 overflow-hidden shadow-sm flex-shrink-0">
                        <img
                            src="/images/logo-dark.png"
                            alt="Koding Keliling Logo"
                            className="size-full object-contain"
                            onError={(e) => { e.currentTarget.src = "/favicon.png"; }}
                        />
                    </div>
                    <div className="w-40 md:min-w-0 md:w-full">
                        <h3 className="text-sm sm:text-lg font-bold truncate">Koding Keliling AI Support</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-success-500 animate-pulse" />
                            <p className="text-xs text-white/80">Online</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                        target="_blank"
                        className="p-2 hidden md:block bg-success-500 rounded-full hover:bg-success-600 transition-colors shadow-sm"
                        title="Open WhatsApp"
                    >
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} className="size-6 brightness-0 invert" />
                    </a>

                    <Link href="/" className="ml-2 border-l border-white/20 pl-4 opacity-80 hover:opacity-100" aria-label="Close Chat" title="Close Chat">
                        <XClose className="size-8" />
                    </Link>
                </div>
            </div>

            {/* Chat Area */}
            <div
                ref={scrollRef}
                className="relative flex-1 overflow-y-auto p-6 space-y-4 bg-[#efe7de]"
            >
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)", backgroundSize: "16px 16px" }} />

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={cx(
                            "flex w-full mb-2",
                            msg.sender === "user" ? "justify-end" : "justify-start"
                        )}
                    >
                        <div
                            className={cx(
                                "relative max-w-[85%] px-4 py-2.5 shadow-sm min-h-[44px]",
                                msg.sender === "user"
                                    ? "rounded-l-xl rounded-tr-xl bg-[#dcf8c6] text-gray-800"
                                    : "rounded-r-xl rounded-tl-xl bg-white text-gray-800"
                            )}
                        >
                            {msg.text ? (
                                <div className={cx(
                                    "prose prose-sm max-w-none prose-p:my-0 prose-headings:my-1 prose-ul:my-1 prose-li:my-0 pb-1.5 break-words",
                                    "text-gray-800 prose-p:!text-gray-800 prose-strong:!text-gray-900 prose-headings:!text-gray-900 prose-li:!text-gray-800",
                                    "prose-a:!text-blue-600 hover:prose-a:!text-blue-700 prose-a:font-bold prose-a:underline"
                                )}>
                                    <ReactMarkdown
                                        components={{
                                            a: ({ node, ...props }) => (
                                                <a target="_blank" rel="noopener noreferrer" {...props} />
                                            ),
                                        }}
                                    >
                                        {msg.text}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <div className="flex gap-1 py-1 px-2">
                                    <span className="size-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <span className="size-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="size-1 bg-gray-300 rounded-full animate-bounce" />
                                </div>
                            )}
                            <div className="mt-1 flex items-center justify-end gap-1">
                                <span className="text-[10px] opacity-50">{msg.timestamp}</span>
                                {msg.sender === "user" && <CheckDone01 className="size-3 text-blue-500" />}
                            </div>

                            {/* Bubble Tail */}
                            <div className={cx(
                                "absolute top-0 size-3",
                                msg.sender === "user"
                                    ? "-right-1 bg-[#dcf8c6]"
                                    : "-left-1 bg-white"
                            )} style={{ clipPath: msg.sender === "user" ? "polygon(0 0, 0 100%, 100% 0)" : "polygon(100% 0, 100% 100%, 0 0)" }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="bg-[#f0f2f5] p-4 pb-8 flex items-center gap-4">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder={language === "id" ? "Ketik pesan..." : "Type a message..."}
                        className="w-full rounded-2xl border-none bg-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-brand shadow-sm pr-12 ring-inset text-gray-900"
                    />
                    <div className="absolute right-4 top-4 bottom-0">
                        <Button
                            color="link-color"
                            size="md"
                            disabled={isTyping}
                            iconLeading={Send01}
                            onClick={handleSend}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
