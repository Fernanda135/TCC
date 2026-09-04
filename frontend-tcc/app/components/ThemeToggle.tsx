'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


import { LightMode, DarkMode } from '@mui/icons-material';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-bg-canvas text-text-primary border border-border-subtle rounded-full hover:bg-state-active-bg transition-colors cursor-pointer flex items-center justify-center"
        >
            {theme === 'dark' ? <LightMode /> : <DarkMode />}
        </button>
    );
}