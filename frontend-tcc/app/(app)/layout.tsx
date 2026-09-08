'use client';

import Navbar from "../components/Navbar";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col" >
            <header className="border-b border-border-subtle sticky top-0 bg-bg-surface" >
                <Navbar />
            </header>
            <div className="bg-bg-canvas transition-colors duration-200 flex-1 w-full">
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}