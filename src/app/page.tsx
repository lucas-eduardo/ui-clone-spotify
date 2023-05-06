'use client'

import {
  House,
  MagnifyingGlass,
  Book,
  Plus,
  ArrowRight,
  CaretDown,
  CaretLeft,
  CaretRight,
  ArrowCircleDown,
  HeartStraight,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  MicrophoneStage,
  SpeakerHifi,
  SpeakerHigh,
  ArrowsOutSimple,
  List,
} from '@phosphor-icons/react'
import Image from 'next/image'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Card from './components/Card'
import CardRecent from './components/CardRecent'

const recents = [
  {
    title: 'Bon Jovi',
    image: 'https://i.scdn.co/image/ab676161000051740b8d424042d51bb8ee412ffe',
  },
  {
    title: 'Bem Sertanejo',
    image: 'https://i.scdn.co/image/ab67616d00001e025ddfe0cab8af6fbe70f98177',
  },
  {
    title: 'Raízes',
    image: 'https://i.scdn.co/image/ab67616d00001e02d0c0928a5955d3055867541d',
  },
  {
    title: 'Baile das Máscaras',
    image: 'https://i.scdn.co/image/ab67616d00001e029af3f9f4a830fd840a8a3170',
  },
  {
    title: 'Depois da Guerra',
    image: 'https://i.scdn.co/image/ab67616d00001e0292e86dafb2fd0d63eea05a4d',
  },
  {
    title: 'DEVNAESTRADA',
    image: 'https://i.scdn.co/image/1bc400ab1b386628c482e33d652f0c8867f48de2',
  },
]

const madeForYou = [
  {
    title: 'Daily Mix 2',
    image:
      'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba4ab8b2114b45b414c453a4e/2/pt-BR/default',
    description: 'Oficina G3, Guilherme de Sá, PG e mais',
  },
  {
    title: 'Daily Mix 3',
    image:
      'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb48c4d4e6f85e00b19a630fa8/3/pt-BR/default',
    description: 'Sorriso Maroto, Só Pra Contrariar, Alexandre Pires e mais',
  },
  {
    title: 'Daily Mix 4',
    image:
      'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb00ff762f8439a324505b37a3/4/pt-BR/default',
    description: 'Guilherme & Santiago, Michel Teló, Mayck & Lyan e mais',
  },
  {
    title: 'Daily Mix 5',
    image:
      'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb818e8d878ff7429b83c452b2/5/pt-BR/default',
    description: 'Roupa Nova, Fábio Jr., Melim e mais',
  },
  {
    title: 'Daily Mix 6',
    image:
      'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe848dfb35ea4969099662dfd/6/pt-BR/default',
    description: 'Journey, Lionel Richie, Chicago e mais',
  },
  {
    title: 'Descobertas da Semana',
    image:
      'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/b4OlsxLapK4Ccp3LOtj_AhRPeYTCY8vnSAwcf_MS76_qe7cWKcO1QegNTMb7p0wYkzqfB7MbWgNHZi5dS3dUz2otZ3IQYn4QXc-0ruqOI5I=/NjE6NTI6NDBUMzEtNTAtMw==',
    description:
      'Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.',
  },
  {
    title: 'Radar de Novidades',
    image:
      'https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb9e690225ad4445530612ccc9/pt-BR',
    description:
      'Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você. Atualiza toda sexta.',
  },
]

const favoriteArtists = [
  {
    title: 'Padre Paulo Gonzales',
    image: 'https://i.scdn.co/image/ab676161000051749694e7a38a2bee27e85ce719',
    description: 'Artista',
  },
  {
    title: 'Bruno Faglioni',
    image: 'https://i.scdn.co/image/ab6761610000517433c1fe4c322f8973dd4c0fce',
    description: 'Artista',
  },
  {
    title: 'Anjos de Resgate',
    image: 'https://i.scdn.co/image/ab6761610000517416d5083061d29d445d05bfe1',
    description: 'Artista',
  },
  {
    title: 'Thiago Brado',
    image: 'https://i.scdn.co/image/ab67616100005174c59b790919b03acd3e4e59d9',
    description: 'Artista',
  },
  {
    title: 'Padre Fábio De Melo',
    image: 'https://i.scdn.co/image/ab676161000051749e4714b00dce0cd130b8232c',
    description: 'Artista',
  },
  {
    title: 'Padre Marcelo Rossi',
    image: 'https://i.scdn.co/image/ab6761610000517402dfc819531d1d46fb4bacf4',
    description: 'Artista',
  },
  {
    title: 'Rosa de Saron',
    image: 'https://i.scdn.co/image/ab676161000051746a41eaf542d3ee8dcc694ab7',
    description: 'Artista',
  },
]

export default function Home() {
  return (
    <div className="grid gap-2 grid-container h-screen px-2 pb-2">
      <nav className="grid-area-nav-bar mt-2 space-y-2">
        <div className="bg-zinc-800 rounded-lg">
          <ul className="px-3 py-2">
            <li className="px-3 py-1">
              <a href="#" className="text-white flex items-center gap-5 h-10">
                <House size={24} weight="fill" />
                <span className="font-bold">Início</span>
              </a>
            </li>

            <li className="px-3 py-1">
              <a
                href="#"
                className="text-zinc-400 flex items-center gap-5 h-10"
              >
                <MagnifyingGlass size={24} weight="bold" />
                <span className="font-bold">Buscar</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800 rounded-lg library-height">
          <header className="flex gap-2 px-4 py-2 flex-row justify-between">
            <button className="text-zinc-400 flex items-center gap-5 px-2 py-1">
              <Book size={24} weight="fill" />
              <span className="font-bold">Sua Biblioteca</span>
            </button>

            <div className="flex gap-2">
              <button>
                <Plus size={18} />
              </button>

              <button>
                <ArrowRight size={18} />
              </button>
            </div>
          </header>

          <div className="mx-4 my-2 flex items-center gap-2">
            <button className="bg-zinc-600/20 rounded-full w-fit h-8 flex items-center justify-center">
              <span className="px-3 py-1 text-sm">Playlists</span>
            </button>

            <button className="bg-zinc-600/20 rounded-full w-fit h-8 flex items-center justify-center">
              <span className="px-3 py-1 text-sm">Artistas</span>
            </button>

            <button className="bg-zinc-600/20 rounded-full w-fit h-8 flex items-center justify-center">
              <span className="px-3 py-1 text-sm">Álbuns</span>
            </button>
          </div>

          <div className="px-2 pb-2">
            <div className="px-2 pt-1 flex items-center justify-between">
              <button className="w-8 h-8 flex items-center justify-center text-zinc-400">
                <MagnifyingGlass size={18} />
              </button>

              <button className="flex items-center gap-2 text-zinc-400 text-sm">
                Recentes <CaretDown weight="fill" />
              </button>
            </div>

            <ul className="flex flex-col">
              <li className="p-2 flex items-center gap-2">
                <Image
                  src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
                  width={48}
                  height={48}
                  alt="Músicas Curtidas"
                  className="rounded"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-white">Músicas Curtidas</span>
                  <span className="text-xs text-zinc-400">
                    Playlist • 11 músicas
                  </span>
                </div>
              </li>

              <li className="p-2 flex items-center gap-2">
                <Image
                  src="https://i.scdn.co/image/ab67616d000011ebb1a35c5022e008aeed9fb690"
                  width={48}
                  height={48}
                  alt="Músicas Curtidas"
                  className="rounded"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-white">Eu Sou Livre</span>
                  <span className="text-xs text-zinc-400">Álbum • PG</span>
                </div>
              </li>

              <li className="p-2 flex items-center gap-2">
                <Image
                  src="https://i.scdn.co/image/ab67616d000011eb85b341c3eedf4ef3c8d9b00b"
                  width={48}
                  height={48}
                  alt="Músicas Curtidas"
                  className="rounded"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-white">Médico de Almas</span>
                  <span className="text-xs text-zinc-400">
                    Álbum • Bruno Faglioni
                  </span>
                </div>
              </li>

              <li className="p-2 flex items-center gap-2">
                <Image
                  src="https://i.scdn.co/image/ab67616d000011eb5b2372295e7ba9ae9a460379"
                  width={48}
                  height={48}
                  alt="Músicas Curtidas"
                  className="rounded"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-white">Vital Signs</span>
                  <span className="text-xs text-zinc-400">
                    Álbum • Survivor
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="grid grid-area-container px-6 bg-gradient-to-b from-cyan-300/20 h-full box-border rounded-lg mt-2">
        <header className="grid-area-top-bar flex items-center justify-between gap-2 py-4 z-10 h-16">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center opacity-60 bg-black/70 rounded-full cursor-not-allowed">
              <CaretLeft size={24} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center opacity-60 bg-black/70 rounded-full cursor-not-allowed">
              <CaretRight size={24} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="text-sm box-border">
              <span className="box-border flex gap-2 items-center px-4 py-1 bg-black/50 rounded-full font-bold">
                <ArrowCircleDown size={18} weight="bold" /> Instalar aplicativo
              </span>
            </a>

            <button type="button">
              <Image
                src="https://i.scdn.co/image/ab6775700000ee8575baca4f263751aa1630d3d3"
                width={24}
                height={24}
                alt="Lucas Eduardo"
                className="rounded-full"
              />
            </button>
          </div>
        </header>

        <PerfectScrollbar>
          <main className="grid-area-main flex flex-col pt-2 gap-6 overflow-y-auto">
            <section className="mb-4">
              <div className="mb-4">
                <h1 className="text-3xl font-bold">Boa noite</h1>
              </div>

              <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                {recents.map((recent, key) => (
                  <CardRecent
                    key={key}
                    title={recent.title}
                    image={recent.image}
                  />
                ))}
              </div>
            </section>

            <section className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <a href="#" className="text-2xl font-bold hover:underline">
                  Feito para Lucas Eduardo
                </a>

                <a
                  href="#"
                  className="text-sm font-bold text-zinc-400 hover:underline"
                >
                  Mostrar tudo
                </a>
              </div>

              <div className="grid grid-cols-7 gap-6">
                {madeForYou.map((item, key) => (
                  <Card
                    key={key}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                ))}
              </div>
            </section>

            <section className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <a href="#" className="text-2xl font-bold hover:underline">
                  Seus artistas favoritos
                </a>

                <a
                  href="#"
                  className="text-sm font-bold text-zinc-400 hover:underline"
                >
                  Mostrar tudo
                </a>
              </div>

              <div className="grid grid-cols-7 gap-6">
                {favoriteArtists.map((item, key) => (
                  <Card
                    key={key}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    isArtist
                  />
                ))}
              </div>
            </section>
          </main>
        </PerfectScrollbar>
      </div>

      <footer className="grid-area-playing-bar flex justify-between items-center pt-2 bg-zinc-900">
        <div className="flex flex-1 items-center">
          <Image
            src="https://i.scdn.co/image/ab67616d0000485199bf30c08aa703a777ba7279"
            width={56}
            height={56}
            alt="Meu Acampamento"
            className="rounded-md"
          />

          <div className="flex flex-col">
            <span className="pl-2 pr-3 text-sm">Deus Gigante</span>
            <span className="pl-2 pr-3 text-xs text-slate-400">
              Thiago Brado
            </span>
          </div>

          <button
            className="flex items-center justify-center w-8 h-8 text-slate-400"
            type="button"
          >
            <HeartStraight size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center max-w-2xl w-1/3">
          <div className="flex gap-2 mb-4">
            <button className="flex items-center justify-center w-8 h-8 text-slate-400">
              <Shuffle size={18} weight="fill" />
            </button>

            <button className="flex items-center justify-center w-8 h-8 text-slate-400">
              <SkipBack size={18} weight="fill" />
            </button>

            <button className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full">
              <Play size={18} weight="fill" />
            </button>

            <button className="flex items-center justify-center w-8 h-8 text-slate-400">
              <SkipForward size={18} weight="fill" />
            </button>

            <button className="flex items-center justify-center w-8 h-8 text-slate-400">
              <Repeat size={18} weight="fill" />
            </button>
          </div>

          <div className="flex w-full items-center justify-between gap-2">
            <span className="text-xs text-zinc-400">1:48</span>

            <div className="h-1 w-full bg-zinc-500 rounded-sm relative">
              <div className="absolute w-6 h-full rounded-sm bg-white" />
            </div>

            <span className="text-xs text-zinc-400">4:05</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <button className="flex items-center justify-center w-8 h-8 text-slate-400">
            <MicrophoneStage size={18} weight="fill" />
          </button>

          <button className="flex items-center justify-center w-8 h-8 text-slate-400">
            <List size={18} weight="fill" />
          </button>

          <button className="flex items-center justify-center w-8 h-8 text-slate-400">
            <SpeakerHifi size={18} weight="fill" />
          </button>

          <div className="flex items-center gap-2 basis-32 shrink">
            <button className="flex items-center justify-center w-8 h-8 text-slate-400">
              <SpeakerHigh size={18} weight="fill" />
            </button>

            <div className="h-1 w-full bg-zinc-500 rounded-sm relative">
              <div className="absolute w-2/4 h-full rounded-sm bg-white" />
            </div>
          </div>

          <button className="flex items-center justify-center w-8 h-8 text-slate-400">
            <ArrowsOutSimple size={18} weight="fill" />
          </button>
        </div>
      </footer>
    </div>
  )
}
