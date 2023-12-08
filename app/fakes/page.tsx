import TweetComponent from "@/app/fakes/components/Tweet.component";
import {tweetsData} from "@/app/fakes/assets/data";
import CardLoaderComponent from "@/app/tinder/components/cardLoader.component";


export default function Page() {
    return(
        <div className="flex flex-col w-full">
        <h1 className="py-10 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
            className="text-transparent bg-clip-text bg-gradient-to-r to-green-300 from-blue-400">Fausses </span>infos.
        </h1>
            <p className="text-center text-xl font-bold pb-4">Click sur un tweet pour comprendre ce qui cloche...</p>
            <div className="grid grid-cols-2 gap-4 grid-flow-row-dense">
            {
                tweetsData.map((singleTweet) => (
                    <TweetComponent tweet={singleTweet}/>
                ))
            }
        </div>
    </div>
    )
}
