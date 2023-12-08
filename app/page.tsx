import { Card } from "flowbite-react";
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
}

const games: Game[] = [
  {
    img: tinderPic,
    title: "Quiz Tinder",
    desc: "Swipes les bonnes réponses et obtiens le meilleur score.",
  },
  {
    img: jamyPic,
    title: "Jamy",
    desc: "Poses tes questions a Jamy, l'expert du climat",
  },
  {
    img: messagePic,
    title: "Idées reçues",
    desc: "Qu’en pensent les gens ?",
  },
  {
    img: imposteurPic,
    title: "L’imposteur",
    desc: "Trouves l’imposteur parmis les PNJs.",
  },
  {
    img: tomettePic,
    title: "Pecho Tomette",
    desc: "Pars en date avec Tomette, activiste climatique.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex gap-4 flex-col md:flex-row">
        {games.map((game) => (
          <Card
            className="w-full md:max-w-sm dark:bg-gradient-to-b from-emerald-700 from-10% to-slate-800 to-90%"
            //imgAlt="Meaningful alt text for an image that is not purely decorative"
            //imgSrc={"/games/" + game.img}
            renderImage={() => <Image width={500} height={500} src={game.img} alt={game.title} />}
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
