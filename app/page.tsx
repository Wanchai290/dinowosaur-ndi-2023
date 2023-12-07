import { Card } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex gap-4 flex-col md:flex-row">
        <Card
          className="w-full md:max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://media.discordapp.net/attachments/1177582869758083132/1182400367330340894/DALLE_2023-12-07_20.16.48_-_An_illustration_depicting_a_Tinder-like_quiz_interface_focused_on_climate_facts._The_screen_shows_a_smartphone_with_a_user-friendly_interface_display.png?ex=65848f27&is=65721a27&hm=e52aa12e86464fdbe783177c8451bed9d4615a8da38e768b88b00887a982e894&=&format=webp&quality=lossless&width=1464&height=1464"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Quiz Tinder
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Swipes les bonnes réponses et obtiens le meilleur score.
          </p>
        </Card>

        <Card
          className="w-full md:max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://media.discordapp.net/attachments/1177582869758083132/1182406017296912516/DALLE_2023-12-07_20.39.15_-_A_whimsical_detailed_nature-focused_illustration_of_a_friendly_climate_scientist_named_Jammy_inspired_by_classic_animation_styles._Jammy_has_a_warm.png?ex=6584946a&is=65721f6a&hm=927c25945b7e5bb2313a9518b1511828df024cc6a03bd3c1c0580386a3a1eec9&=&format=webp&quality=lossless&width=1464&height=1464"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Jamy
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Poses tes questions a Jamy, l&#39;expert du climat
          </p>
        </Card>
      </div>
    </main>
  );
}
