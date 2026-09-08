'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@mui/material";


export default function Home() {

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/homepage");
  }

  return (
    <main className="min-h-screen flex">
      <div className="login-bg min-h-screen w-full flex flex-col items-center p-8 text-center">

        <div className="bg-(--login-bg) text-center p-8 my-10 rounded-lg shadow-lg w-full lg:w-2/5">
          {/* <h1 className="text-2xl lg:text-[36px] font-bold text-(--black) mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="text-base text-(--gray-2) mb-10">
            Faça login na sua conta
          </p> */}
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4 text-left">
              <h2 className="text-(--dark-blue) text-2xl font-bold">Login</h2>
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
              <Button
                type="submit"
                className="bg-(--orange) text-(--white) py-2 px-4 rounded-md hover:bg-orange-500 cursor-pointer transition-colors"
              >
                Entrar
              </Button>

              <Link href="/register" className="text-(--orange) text-center hover:underline">
                Não tem uma conta? Cadastre-se
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}