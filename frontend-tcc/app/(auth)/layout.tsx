'use client';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-(--dark-blue-2) text-(--orange) py-4 px-8 text-center shrink-0">
                <h1 className="text-4xl font-bold">SPAWN IDEIAS</h1>
            </header>

            <div className="flex-1 overflow-hidden">
                {children}
            </div>
        </div>
    );
}