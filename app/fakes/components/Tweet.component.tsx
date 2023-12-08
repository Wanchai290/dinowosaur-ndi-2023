'use client';
import {TweetModel} from "@/app/fakes/models/tweet.model";
import {Avatar, Card} from "flowbite-react";
import {useState} from "react";

interface Props {
    tweet: TweetModel
}
export default function TweetComponent({tweet}: Readonly<Props>) {
    const [explainMode, setExplainMode] = useState(false);

    return(
        <div className="p-3">
            <Card onClick={() => setExplainMode(!explainMode)}
            className={explainMode
              ? "dark:bg-gradient-to-b from-emerald-700 from-0% to-slate-800 to-60% cursor-pointer"
            : "dark:bg-gradient-to-b from-blue-400 from-0% to-slate-800 to-60% cursor-pointer"}>
                <Avatar img={tweet.pdpLink} rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div className="text-2xl ">{tweet.username}</div>
                    </div>
                </Avatar>
                <p className="text-xl">{explainMode ? "Explication : " + tweet.explenation : tweet.tweetText}</p>
            </Card>
        </div>
    )
}