import {useEffect} from "react";

interface Props {
    imagePath: string
}

export default function NPCComponent({imagePath}: Props) {

    useEffect(() => {
    }, []);

    return <div>
        <img src={imagePath} className="w-[25%] h-[25%]"></img>
    </div>
}