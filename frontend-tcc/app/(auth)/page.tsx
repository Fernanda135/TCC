'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";

import { VideogameAsset } from "@mui/icons-material";

export default function Home() {

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/homepage");
  }

  return (
    <main className="min-h-screen flex">
      <div className="login-bg min-h-screen w-full flex flex-col lg:flex-row justify-around items-center gap-12 p-8">
        

        <div className="flex flex-col justify-between space-y-8 gap-37.5 w-full lg:w-2/5">
          <div className="flex items-center gap-2.5">
            <div className="border-(--orange) border-2 w-20 h-20 rounded-full flex items-center justify-center">
              <VideogameAsset sx={{ fontSize: 50 }} className="text-(--orange)" />
            </div>
            <div>
              <h1 className="text-(--white) font-bold text-[18px]">SPAWN</h1>
              <h1 className="text-(--orange) font-bold text-[18px]">IDEIAS</h1>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 w-full lg:w-2/5">
            <h1 className="text-(--white) text-6xl">Feedback</h1>
            <h1 className="text-(--orange) text-6xl">Centralizado</h1>
            <hr className="border-(--orange) my-4 border-2 w-24" />
            <p className="text-(--white)">
              Ideias da comunidade para levar seus jogos ao próximo nível.
            </p>
          </div>
          
          <div className="flex space-x-2">
            <div className="bg-orange-600 w-6 h-6 rounded-full"></div>
            <div className="bg-orange-500 w-6 h-6 rounded-full"></div>
            <div className="bg-orange-400 w-6 h-6 rounded-full"></div>
          </div>
        </div>


        <div className="bg-(--login-bg) p-8 rounded-lg shadow-lg w-full lg:w-auto">
          <h1 className="text-[36px] font-bold text-(--black) mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="text-base text-(--gray-2) mb-10">
            Faça login para acessar sua conta
          </p>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
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
              <button
                type="submit"
                className="bg-(--orange) text-(--white) py-2 px-4 rounded-md hover:bg-orange-500 cursor-pointer transition-colors"
              >
                Entrar
              </button>

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