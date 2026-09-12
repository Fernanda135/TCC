interface IUser {
  userId: string;
  userImage: string;
  firstName: string;
  lastName: string;
}

export interface ICommentMock {
  _id: string;
  user: IUser;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPostMock {
  _id: string;
  user: IUser;
  text: string;
  imageUrl?: string;
  comments?: ICommentMock[];
  likes?: string[];
  createdAt: string;
  updatedAt: string;
}

// Usuário da sessão atual (Lucas Silva)
export const CURRENT_USER_MOCK: IUser = {
  userId: "user-1",
  userImage: "https://i.pravatar.cc/150?img=11",
  firstName: "Lucas",
  lastName: "Silva",
};

export const POSTS_MOCK: IPostMock[] = [
  {
    _id: "66f1a8e2b4c1a2001c8f9001",
    user: CURRENT_USER_MOCK, // Post do autor logado
    text: "E se no próximo update de RPG de turno tivéssemos um sistema de combos elementais baseado no clima do mapa? Chuva aumentaria dano elétrico em 50%! O que acham?",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    likes: ["user-2", "user-3", "user-4", "user-5"],
    comments: [
      {
        _id: "comment-101",
        user: {
          userId: "user-2",
          userImage: "https://i.pravatar.cc/150?img=5",
          firstName: "Beatriz",
          lastName: "Lima",
        },
        text: "Ideia sensacional! Lembra a mecânica do Divinity Original Sin.",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        updatedAt: new Date(Date.now() - 3600000).toISOString(),
      },
    ],
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    updatedAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9002",
    user: {
      userId: "user-2",
      userImage: "https://i.pravatar.cc/150?img=5",
      firstName: "Beatriz",
      lastName: "Lima",
    },
    text: "Testando a nova build da interface do Spawn Ideias com Next.js App Router e Tailwind v4. A navegação responsiva e o tema escuro ficaram muito limpos!",
    imageUrl: undefined,
    likes: ["user-1", "user-3"],
    comments: [],
    createdAt: new Date(Date.now() - 14400000).toISOString(),
    updatedAt: new Date(Date.now() - 14400000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9003",
    user: {
      userId: "user-3",
      userImage: "https://i.pravatar.cc/150?img=3",
      firstName: "Guilherme",
      lastName: "Santos",
    },
    text: "Conceito de arte inicial para o chefe do nível 3. A ideia é que ele mude de padrão de ataque conforme a barra de vida cai abaixo de 30%. Feedback é super bem-vindo!",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    likes: ["user-1", "user-2", "user-4"],
    comments: [
      {
        _id: "comment-102",
        user: CURRENT_USER_MOCK,
        text: "Curti muito as cores! O contraste com o cenário vai ajudar na legibilidade durante o combate.",
        createdAt: new Date(Date.now() - 18000000).toISOString(),
        updatedAt: new Date(Date.now() - 18000000).toISOString(),
      },
    ],
    createdAt: new Date(Date.now() - 21600000).toISOString(),
    updatedAt: new Date(Date.now() - 21600000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9004",
    user: {
      userId: "user-4",
      userImage: "https://i.pravatar.cc/150?img=9",
      firstName: "Camila",
      lastName: "Rocha",
    },
    text: "Estudo de iluminação e shader para a fase noturna da nossa floresta mágica. Conseguimos otimizar a contagem de triângulos em 40% usando LODs dinâmicos!",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    likes: ["user-2", "user-5", "user-6"],
    comments: [],
    createdAt: new Date(Date.now() - 36000000).toISOString(),
    updatedAt: new Date(Date.now() - 36000000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9005",
    user: {
      userId: "user-5",
      userImage: "https://i.pravatar.cc/150?img=12",
      firstName: "Matheus",
      lastName: "Oliveira",
    },
    text: "Vocês preferem movimentação em grade clássica ou movimentação livre de 360 graus para jogos de sobrevivência isométrica em pixel art?",
    imageUrl: undefined,
    likes: ["user-1"],
    comments: [
      {
        _id: "comment-103",
        user: {
          userId: "user-6",
          userImage: "https://i.pravatar.cc/150?img=20",
          firstName: "Fernanda",
          lastName: "Vitória",
        },
        text: "Movimentação em 360 traz uma sensação mais moderna, mas na grade o pathfinding fica mais preciso.",
        createdAt: new Date(Date.now() - 40000000).toISOString(),
        updatedAt: new Date(Date.now() - 40000000).toISOString(),
      },
    ],
    createdAt: new Date(Date.now() - 43200000).toISOString(),
    updatedAt: new Date(Date.now() - 43200000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9006",
    user: {
      userId: "user-6",
      userImage: "https://i.pravatar.cc/150?img=20",
      firstName: "Fernanda",
      lastName: "Vitória",
    },
    text: "Ajustando a rota da API com Server Actions no Next.js. O payload de atualização do post agora retorna em menos de 80ms sem recarregar a tela! ⚡",
    imageUrl: undefined,
    likes: ["user-1", "user-2", "user-3", "user-4", "user-5"],
    comments: [],
    createdAt: new Date(Date.now() - 50400000).toISOString(),
    updatedAt: new Date(Date.now() - 50400000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9007",
    user: CURRENT_USER_MOCK, // Outro post do autor logado
    text: "Prototipando uma mecânica para o Spawn Ideias onde a comunidade vota nas melhores sugestões de jogos e ganha badges exclusivas de 'Colaborador'. O que acham?",
    imageUrl: undefined,
    likes: ["user-2", "user-6"],
    comments: [],
    createdAt: new Date(Date.now() - 64800000).toISOString(),
    updatedAt: new Date(Date.now() - 64800000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9008",
    user: {
      userId: "user-7",
      userImage: "https://i.pravatar.cc/150?img=15",
      firstName: "Rafael",
      lastName: "Costa",
    },
    text: "Prototipando um jogo de corrida futurista onde cada ultrapassagem justa recarrega o turbo do carro. Queremos incentivar pilotagem agressiva e limpa.",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
    likes: ["user-3", "user-5"],
    comments: [],
    createdAt: new Date(Date.now() - 72000000).toISOString(),
    updatedAt: new Date(Date.now() - 72000000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9009",
    user: {
      userId: "user-8",
      userImage: "https://i.pravatar.cc/150?img=26",
      firstName: "Juliana",
      lastName: "Mendes",
    },
    text: "Finalizei o tema de áudio interativo da hub principal do jogo. A trilha sonora transiciona suavemente entre arranjos acústicos de dia e sintetizadores de noite!",
    imageUrl: undefined,
    likes: ["user-1", "user-2", "user-4", "user-6"],
    comments: [],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _id: "66f1a8e2b4c1a2001c8f9010",
    user: {
      userId: "user-9",
      userImage: "https://i.pravatar.cc/150?img=60",
      firstName: "Thiago",
      lastName: "Alves",
    },
    text: "Inspeção de itens em 3D implementada no inventário. Agora o jogador pode girar e inspecionar detalhes dos colecionáveis desbloqueados.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    likes: ["user-1", "user-3", "user-7"],
    comments: [],
    createdAt: new Date(Date.now() - 100800000).toISOString(),
    updatedAt: new Date(Date.now() - 100800000).toISOString(),
  },
];