import React from "react";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Image
                src="/images/logo-dark.png"
                alt="KodingKeliling Logo"
                width={128}
                height={128}
                className="h-12 w-auto"
                onError={(e) => {
                    // Fallback if logo-dark.png doesn't exist or is corrupted
                    e.currentTarget.src = "/favicon.png";
                }}
            />
            <Image
                src="/images/title-light.png"
                alt="Koding Keliling"
                width={200}
                height={40}
                className="h-8 w-auto hidden dark:block"
            />
            <Image
                src="/images/title-dark.png"
                alt="Koding Keliling"
                width={200}
                height={40}
                className="h-8 w-auto block dark:hidden"
            />
        </div>
    );
};
