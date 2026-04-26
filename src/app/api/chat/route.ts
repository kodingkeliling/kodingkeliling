import { NextResponse } from "next/server";
import { config } from "@/utils/config";

const notifyAdminOfError = async (query: string, error: any) => {
    const { adminEmail, gasWebappUrl, gasApiKey } = config.server;

    if (!adminEmail || !gasWebappUrl || !gasApiKey) {
        console.warn("Skipping notification: Admin email, GAS URL, or GAS Token not configured.");
        return;
    }

    try {
        await fetch(gasWebappUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: gasApiKey,
                email: adminEmail,
                subject: `🚨 Dify API Error - Koding Keliling`,
                name: "Admin Koding Keliling",
                message: `Dify API failed to respond for query: "${query}".\n\nError details: ${JSON.stringify(error)}`,
                title: "System Alert: Dify Unresponsive",
            }),
        });
    } catch (e) {
        console.error("Failed to send admin notification:", e);
    }
};

export async function POST(req: Request) {
    let requestData: any = {};
    try {
        requestData = await req.json();
        const { query, user, conversation_id } = requestData;

        const response = await fetch(`${config.server.difyApiUrl}/chat-messages`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${config.server.difyApiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                user,
                conversation_id: conversation_id || "",
                response_mode: "streaming",
                inputs: {},
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            // Notify admin about the failure
            await notifyAdminOfError(query, errorData);
            return NextResponse.json({ 
                error: "DIFY_ERROR", 
                message: "Maaf saat ini service sedang ada kendala, anda bisa langsung chat whatsapp kami." 
            }, { status: response.status });
        }

        return new Response(response.body, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
            },
        });
    } catch (error) {
        console.error("Dify API Proxy Error:", error);
        // Also notify on catch
        if (requestData.query) {
             await notifyAdminOfError(requestData.query, { message: "Unexpected failure", stack: (error as Error).stack });
        }
        return NextResponse.json({ 
            error: "INTERNAL_ERROR", 
            message: "Maaf saat ini service sedang ada kendala, anda bisa langsung chat whatsapp kami." 
        }, { status: 500 });
    }
}
