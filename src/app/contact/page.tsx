"use client";

import { useEffect } from "react";
import { ContactChatBot } from "@/components/contact-chatbot";

export default function ContactPage() {
    useEffect(() => {
        // Lock body scroll and set viewport height precisely
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        
        // Hide footer via class if needed or just rely on flex-1 h-full
        // The RootLayout structure makes children take flex-1. 
        // If ContactPage is h-full, it covers the space between Navbar/Marquee and end of screen.
        
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[1001] flex flex-col bg-white">
            {/* The inset-0 fixed with z-1000 covers everything */}
            <ContactChatBot />
        </div>
    );
}
