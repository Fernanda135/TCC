'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";

import { Avatar, Button } from "@mui/material";

export default function Register() {

    const router = useRouter();
    const [avatar, setAvatar] = React.useState<string | undefined>(undefined);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.push("/homepage");
    }

    return (
        <main className="min-h-screen flex">
            <div className="login-bg min-h-screen w-full flex flex-col items-center p-8 text-center">

                <div className="bg-(--login-bg) text-center p-8 my-10 rounded-lg shadow-lg w-full lg:w-3/5">
                    {/* <h1 className="text-2xl lg:text-[36px] font-bold text-(--black) mb-2">
                        Seja bem-vindo!
                    </h1>
                    <p className="text-base text-(--gray-2) mb-10">
                        Crie uma nova conta
                    </p> */}
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-4 text-left">
                            <h2 className="text-(--dark-blue) text-2xl font-bold">Seja bem-vindo!</h2>

                            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4">
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Nome"
                                    className="border border-(--border-subtle) rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-(--orange) w-full md:w-1/2 lg:w-1/2"
                                    />
                                <input 
                                    type="text" 
                                    name="surname" 
                                    id="surname" 
                                    placeholder="Sobrenome"
                                    className="border border-(--border-subtle) rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-(--orange) w-full md:w-1/2 lg:w-1/2"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Descrição"
                                className="border border-(--border-subtle) rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-(--orange)"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-(--border-subtle) rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-(--orange)"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="border border-(--border-subtle) rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-(--orange)"
                            />

                            <div className="flex gap-4 items-center">
                                <Avatar alt="Imagem de perfil" src={avatar} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="border border-(--border-subtle) rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-(--orange)"
                                    onChange={handleAvatarChange}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="contained"
                                className="bg-(--orange)! text-(--white) py-2 px-4 rounded-md hover:bg-orange-500! cursor-pointer transition-colors"
                            >
                                Cadastrar
                            </Button>

                            <Link href="/" className="text-(--orange) text-center hover:underline">
                                Já tem uma conta? Faça login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
