import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"

export const metadata: Metadata = {
    title: "Meeting Buddy",
    description: "An AI buddy that helps with records meetings.",
};

const manrope = Manrope();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const hello = "";
    hello.split("as");


    return (
        <html lang="en">
            <body className={`${manrope.className} bg-stone-950 text-stone-100`}>
                {children}
            </body>
        </html>
    );
}
