'use client';

import Navbar from "../components/Navbar";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col bg-bg-canvas text-text-primary transition-colors duration-200">

            <Navbar />

            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}