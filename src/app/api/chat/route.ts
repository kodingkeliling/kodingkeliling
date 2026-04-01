import { NextResponse } from "next/server";

const notifyAdminOfError = async (query: string, error: any) => {
    const adminEmail = process.env.ADMIN_EMAIL;
    const gasUrl = process.env.GAS_WEBAPP_URL;
    const gasToken = process.env.GAS_API_KEY;

    if (!adminEmail || !gasUrl || !gasToken) {
        console.warn("Skipping notification: Admin email, GAS URL, or GAS Token not configured.");
        return;
    }

    try {
        await fetch(gasUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: gasToken,
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

        const response = await fetch(`${process.env.DIFY_API_URL}/chat-messages`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.DIFY_API_KEY}`,
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
