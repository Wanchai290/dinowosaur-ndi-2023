import TweetComponent from "@/app/fakes/components/Tweet.component";
import {tweetsData} from "@/app/fakes/assets/data";


export default function Page() {
    return(
        <div className="grid grid-cols-2 gap-4 h-screen">
            {
                tweetsData.map((singleTweet) => (
                    <TweetComponent tweet={singleTweet}/>
                ))
            }
        </div>
    )
}