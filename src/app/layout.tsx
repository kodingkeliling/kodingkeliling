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
        default: "KodingKeliling — Jasa Pembuatan Website & Aplikasi Kustom Profesional Bandung & Jakarta",
        template: "%s | KodingKeliling",
    },
    description: "KodingKeliling adalah jasa pembuatan website, web app, software kustom (ERP/CRM), dan aplikasi mobile Android & iOS profesional di Bandung, Jakarta, dan Indonesia dengan performa tinggi serta SEO-friendly.",
    keywords: [
        "jasa pembuatan website",
        "jasa pembuatan aplikasi",
        "jasa pembuatan software",
        "pembuatan website bandung",
        "pembuatan website jakarta",
        "jasa website indonesia",
        "software kustom",
        "aplikasi mobile",
        "Android & iOS",
        "ERP kustom",
        "CRM kustom",
        "KodingKeliling",
        "solusi digital"
    ],
    authors: [{ name: "KodingKeliling" }],
    creator: "KodingKeliling",
    publisher: "KodingKeliling",
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://kodingkeliling.com",
        title: "KodingKeliling — Jasa Pembuatan Website & Aplikasi Kustom Profesional Bandung & Jakarta",
        description: "KodingKeliling menyediakan jasa pembuatan website, web app, software kustom, dan aplikasi mobile profesional di Bandung, Jakarta, dan Indonesia.",
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
