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
        default: "KodingKeliling — Professional Website & Custom App Development for Global Clients",
        template: "%s | KodingKeliling",
    },
    description: "KodingKeliling provides professional website development, custom software (ERP/CRM), and mobile app services for clients worldwide with high performance and SEO-friendly solutions.",
    keywords: [
        "professional website development",
        "custom software development",
        "mobile app development",
        "global website services",
        "Android & iOS apps",
        "custom ERP",
        "custom CRM",
        "KodingKeliling",
        "global digital solutions",
        "multilingual website development"
    ],
    authors: [{ name: "KodingKeliling" }],
    creator: "KodingKeliling",
    publisher: "KodingKeliling",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://kodingkeliling.com",
        title: "KodingKeliling — Professional Website & Custom App Development Worldwide",
        description: "KodingKeliling provides cutting-edge website, software, and mobile app development services for businesses globally.",
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
