import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import { LanguageProvider } from "@/context/LanguageContext";
import { PromoMarquee } from "@/components/promo-marquee";
import { Navbar } from "@/components/navbar";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FooterSection } from "@/components/footer-section";
import { ChatFab } from "@/components/chat-fab";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "KodingKeliling — Solusi Pembuatan Website & Software Kustom Profesional",
        template: "%s | KodingKeliling",
    },
    description: "KodingKeliling menyediakan layanan pembuatan website, web app, software kustom (ERP/CRM), dan aplikasi mobile Android & iOS dengan performa tinggi dan SEO-friendly.",
    keywords: ["pembuatan website", "web app", "software kustom", "aplikasi mobile", "Android & iOS", "ERP kustom", "CRM kustom", "KodingKeliling", "solusi digital"],
    authors: [{ name: "KodingKeliling" }],
    creator: "KodingKeliling",
    publisher: "KodingKeliling",
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://kodingkeliling.com",
        title: "KodingKeliling — Solusi Pembuatan Website & Software Kustom Profesional",
        description: "KodingKeliling menyediakan layanan pembuatan website, web app, software kustom, dan aplikasi mobile dengan performa tinggi.",
        siteName: "KodingKeliling",
    },
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <LanguageProvider>
                        <Theme>
                            <div className="flex min-h-screen flex-col">
                                <Navbar />
                                <PromoMarquee />
                                <div className="flex-1">
                                    {children}
                                </div>
                                <FooterSection />
                                <ChatFab />
                            </div>
                        </Theme>
                    </LanguageProvider>
                </RouteProvider>
            </body>
        </html>
    );
}
