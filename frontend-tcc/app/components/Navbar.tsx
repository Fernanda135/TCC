'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Search,
    Message,
    Notifications,
    Help,
    Person,
    Logout,
    KeyboardArrowDown
} from "@mui/icons-material";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        router.push("/");
    };

    return (
        <header className="p-4 border-b border-border-subtle bg-bg-surface flex justify-between items-center gap-4">

            <div className="flex items-center gap-6 flex-1 max-w-md">
                <Link href="/homepage" className="font-bold text-2xl text-action-primary whitespace-nowrap">
                    Spawn Ideias
                </Link>

                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full pl-4 pr-10 py-2 rounded-lg border border-border-subtle bg-bg-canvas text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-action-primary text-sm transition-all"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary text-xl pointer-events-none" />
                </div>
            </div>


            <div className="flex items-center gap-3">
                <ThemeToggle />

                <button
                    type="button"
                    aria-label="Mensagens"
                    className="p-2 bg-bg-canvas text-text-primary border border-border-subtle rounded-full hover:bg-state-active-bg transition-colors cursor-pointer flex items-center justify-center"
                >
                    <Message className="text-lg" />
                </button>

                <button
                    type="button"
                    aria-label="Notificações"
                    className="p-2 bg-bg-canvas text-text-primary border border-border-subtle rounded-full hover:bg-state-active-bg transition-colors cursor-pointer flex items-center justify-center"
                >
                    <Notifications className="text-lg" />
                </button>

                <button
                    type="button"
                    aria-label="Ajuda"
                    className="p-2 bg-bg-canvas text-text-primary border border-border-subtle rounded-full hover:bg-state-active-bg transition-colors cursor-pointer flex items-center justify-center"
                >
                    <Help className="text-lg" />
                </button>


                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 border border-border-subtle rounded-full py-1.5 px-3 cursor-pointer hover:bg-state-active-bg transition-colors bg-bg-canvas"
                    >
                        <div className="w-8 h-8 rounded-full bg-action-primary text-on-action-primary flex items-center justify-center font-bold text-sm">
                            U
                        </div>
                        <span className="text-text-primary font-medium text-sm hidden sm:inline">
                            Usuário
                        </span>
                        <KeyboardArrowDown
                            className={`text-text-secondary transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
                        />
                    </button>


                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-bg-surface border border-border-subtle rounded-xl shadow-lg py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                            <div className="px-4 py-2 border-b border-border-subtle">
                                <p className="text-sm font-semibold text-text-primary">Usuário</p>
                                <p className="text-xs text-text-secondary truncate">usuario@email.com</p>
                            </div>

                            <Link
                                href="/perfil"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-text-primary hover:bg-state-active-bg transition-colors"
                            >
                                <Person fontSize="small" className="text-text-secondary" />
                                Meu Perfil
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-state-error hover:bg-state-error-bg transition-colors cursor-pointer text-left"
                            >
                                <Logout fontSize="small" />
                                Sair
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}