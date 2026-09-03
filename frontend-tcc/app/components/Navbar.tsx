'use client';

import Link from "next/link";
import { Search, Message, Notifications, Help } from "@mui/icons-material";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="p-4 border-b border-border-subtle bg-bg-surface flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Link href="/homepage" className="font-bold text-2xl text-action-primary">
                    Spawn Ideias
                </Link>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="pl-4 pr-4 py-2 rounded-md border border-border-subtle bg-bg-canvas text-text-primary focus:outline-none focus:ring-2 focus:ring-action-secondary"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Message className="p-2 bg-bg-surface text-text-primary border border-border-subtle rounded-full hover:opacity-80 transition-all cursor-pointer" />
                <Notifications className="p-2 bg-bg-surface text-text-primary border border-border-subtle rounded-full hover:opacity-80 transition-all cursor-pointer" />
                <Help className="p-2 bg-bg-surface text-text-primary border border-border-subtle rounded-full hover:opacity-80 transition-all cursor-pointer" />
            </div>



            
        </header>
    );
};
