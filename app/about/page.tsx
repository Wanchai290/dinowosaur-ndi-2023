import {
  DarkThemeToggle,
  ThemeModeScript,
  Button,
  Card,
} from "flowbite-react";
import Image, { StaticImageData } from "next/image";
import toum from "@/public/people/toum.jpeg";
import alex from "@/public/people/alex.jpeg";
import juju from "@/public/people/juju.jpeg";
import toma from "@/public/people/toma.jpeg";
import leo from "@/public/people/leo.png";
import eloya from "@/public/people/eloya.png";
import mathis from "@/public/people/mathis.webp";

interface People {
  img: StaticImageData;
  name: string;
  link: string;
}

const people: People[] = [
  {
    img: alex,
    name: "Alexandre Bouget",
    link: "https://github.com/alex-bouget",
  },
  {
    img: toum,
    name: "Tom Fourcaudot",
    link: "https://github.com/tom-fourcaudot",
  },
  {
    img: mathis,
    name: "Mathis Foussac",
    link: "https://github.com/Asolmele",
  },
  {
    img: toma,
    name: "Thomas Menier",
    link: "https://github.com/Wanchai290",
  },
  {
    img: eloya,
    name: "Eloya Miqueu",
    link: "https://github.com/Eloya62",
  },
  {
    img: leo,
    name: "Leo Paille",
    link: "https://github.com/Leikoe",
  },
  {
    img: juju,
    name: "Juliette Petit",
    link: "https://github.com/JuliettePetit",
  },
];

export default function Page() {
  return(
    <main className="h-screen gap-0">
    <div className="flex shadow-[0_15px_30px_-15px_rgb(6,78,59)] justify-self-center max-w-50 h-14 bg-color-gray-500 m-5">
      <p className="m-5"> Ce site a été réalisé dans le contexte de la nuit de l'info 2023, en équipe de 7.</p>
    </div>
    <div className="flex flex-row flex-wrap justify-around py-5">
    {people.map((p) => (
    <Card className="max-w-sm y-4 grow-0 shrink-0 basis-52" key={p.name}>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt={p.name}
          height="96"
          src={p.img}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{p.name}</h5>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Button outline gradientDuoTone="greenToBlue" href={p.link} >
            Github
         </Button>
        </div>
      </div>
    </Card>
    ))}
    </div>
    </main>
  );
}