'use client';

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Search,
    Forum,
    VideogameAsset,
    Home,
    Person,
    Logout
} from "@mui/icons-material";
import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import Modal from '@mui/material/Modal';

export default function Navbar() {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenProfileModal = () => {
        handleMenuClose();
        setIsModalOpen(true);
    };

    const handleCloseProfileModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        handleMenuClose();
        router.push("/");
    };

    return (
        <div className="flex flex-col lg:flex-row items-center p-2 max-w-6xl mx-auto">
            <div>
                <Link href="/homepage" className="font-bold text-2xl text-action-primary whitespace-nowrap">
                    Spawn Ideias
                </Link>
            </div>

            <div className="flex-1 flex items-center justify-center lg:justify-start mt-2 lg:mt-0">
                <div className="flex-1">
                    <form className="flex flex-1 items-center space-x-1 p-2 mx-2 max-w-96 border border-border-subtle bg-bg-canvas rounded-md">
                        <Search className="h-4 text-text-secondary" />
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="flex-1 outline-none text-text-primary placeholder:text-text-secondary bg-transparent"
                        />
                    </form>
                </div>

                <div className="flex items-center space-x-4 px-6">
                    <Link href="/homepage" className="icon flex flex-col items-center">
                        <Home className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                        <p className="text-sm text-text-secondary hover:text-text-primary">Início</p>
                    </Link>
                    <Link href="/homepage" className="icon hidden md:flex flex-col items-center">
                        <Forum className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                        <p className="text-sm text-text-secondary hover:text-text-primary">Mensagens</p>
                    </Link>
                    <Link href="/homepage" className="icon hidden md:flex flex-col items-center">
                        <VideogameAsset className="h-5 w-5 text-text-secondary hover:text-text-primary" />
                        <p className="text-sm text-text-secondary hover:text-text-primary">Jogos</p>
                    </Link>

                    <div>
                        <Avatar
                            alt="User Avatar"
                            src="/"
                            className="cursor-pointer"
                            sx={{ width: 32, height: 32 }}
                            onClick={handleAvatarClick}
                        />

                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            slotProps={{
                                paper: {
                                    className: "bg-bg-surface text-text-primary border border-border-subtle rounded-xl shadow-lg mt-2 min-w-[160px]"
                                }
                            }}
                        >
                            <MenuItem
                                onClick={handleOpenProfileModal}
                                className="text-text-primary hover:bg-state-active-bg text-sm py-2 px-4 gap-2"
                            >
                                <Person fontSize="small" className="text-text-secondary" />
                                Meu Perfil
                            </MenuItem>

                            <MenuItem
                                onClick={handleLogout}
                                className="text-state-error hover:bg-state-error-bg text-sm py-2 px-4 gap-2"
                            >
                                <Logout fontSize="small" className="text-state-error" />
                                Sair
                            </MenuItem>
                        </Menu>

                        <Modal
                            open={isModalOpen}
                            onClose={handleCloseProfileModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg-surface text-text-primary border border-border-subtle p-6 rounded-lg shadow-lg w-full max-w-md">
                                <h2 id="modal-modal-title" className="text-lg font-bold mb-4">
                                    Perfil do Usuário
                                </h2>
                                <p id="modal-modal-description" className="text-text-secondary">
                                    Informações e detalhes da conta do usuário.
                                </p>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}