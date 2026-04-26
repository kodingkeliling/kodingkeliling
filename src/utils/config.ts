/**
 * Centralized configuration for environment variables.
 * This helps in maintaining a single source of truth for env vars
 * and provides better type safety and shorter variable names.
 */

export const config = {
    // Public variables (available on client and server)
    public: {
        whatsappLink: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "",
        brandName: "KodingKeliling",
    },
    
    // Server-only variables (available only on server)
    server: {
        adminEmail: process.env.ADMIN_EMAIL || "",
        gasWebappUrl: process.env.GAS_WEBAPP_URL || "",
        gasApiKey: process.env.GAS_API_KEY || "",
        difyApiKey: process.env.DIFY_API_KEY || "",
        difyApiUrl: process.env.DIFY_API_URL || "https://api.dify.ai/v1",
    }
};
