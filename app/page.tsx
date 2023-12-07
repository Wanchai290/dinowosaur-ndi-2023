import { Card } from "flowbite-react";
import Image from "next/image";

interface Game {
  img: string;
  title: string;
  desc: string;
}

const games: Game[] = [
  {
    img: "/quizz_tinder.png",
    title: "Quiz Tinder",
    desc: "Swipes les bonnes réponses et obtiens le meilleur score.",
  },
  {
    img: "/jamy.png",
    title: "Jamy",
    desc: "Poses tes questions a Jamy, l'expert du climat",
  },
  {
    img: "/message.webp",
    title: "Idées reçues",
    desc: "Qu’en pensent les gens ?",
  },
  {
    img: "/imposteur.png",
    title: "L’imposteur",
    desc: "Trouves l’imposteur parmis les PNJs.",
  },
  {
    img: "/tomette.png",
    title: "Idées reçues",
    desc: "Pars en date avec Tomette, activiste climatique.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex gap-4 flex-col md:flex-row">
        {games.map((game) => (
          <Card
            className="w-full md:max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={"/games/" + game.img}
            key={game.title}
          >
            <h5 className="text-2xl font-bold tracking-tight">{game.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {game.desc}
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
}
