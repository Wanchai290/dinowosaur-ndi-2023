//'use client';
import { Card,
        Button,
} from "flowbite-react";
import Link from "next/link";
import { redirect } from 'next/navigation';
import Image, { StaticImageData } from "next/image";
import jamyPic from "@/public/games/jamy.png";
import tinderPic from "@/public/games/quizz_tinder.png";
import tomettePic from "@/public/games/tomette.png";
import messagePic from "@/public/games/message.webp";
import imposteurPic from "@/public/games/imposteur.png";

interface Game {
  img: StaticImageData;
  title: string;
  desc: string;
  link: string;
}

const games: Game[] = [
  {
    img: tinderPic,
    title: "Climate swipe",
    desc: "Swipes les bonnes réponses et obtiens le meilleur score.",
    link: "/tinder",
  },
  {
    img: jamyPic,
    title: "Jamy",
    desc: "Poses tes questions a Jamy, l'expert du climat",
    link: "/tinder",
  },
  {
    img: messagePic,
    title: "Idées reçues",
    desc: "Qu’en pensent les gens ?",
    link: "/tinder",
  },
  {
    img: imposteurPic,
    title: "L’imposteur",
    desc: "Trouves l’imposteur parmis les PNJs.",
    link: "/tinder",
  },
  {
    img: tomettePic,
    title: "Pecho Tomette",
    desc: "Pars en date avec Tomette, activiste climatique.",
    link: "/tinder",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4 flex-col md:flex-row">
        {games.map((game) => (
          <Link className="group min-h-full" href={game.link}>
          <Card
            className="w-full min-h-full md:max-w-sm dark:bg-gradient-to-b from-emerald-700 from-10% to-slate-800 to-90%  hover:opacity-40 transition duration-500 overflow-hidden"
            renderImage={() => <Image className="hover:scale-110 transition duration-500" width={500} height={500} src={game.img} alt={game.title} />}
            key={game.title}
          >
            <h5 className="text-2xl font-bold tracking-tight">{game.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {game.desc}
            </p>
          </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
