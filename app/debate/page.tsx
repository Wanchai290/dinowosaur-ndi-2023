"use client";
import debate from "./components/gameEngine";
import React from "react";
import Dialogs from "./components/Dialog";
import { DialogDebate } from "./models/debate.model";


export default function Home() {
	const canvasRef = React.useRef<HTMLCanvasElement>(null);
    React.useEffect(() => {
        if (!canvasRef.current) return;
        let dialogs = new DialogDebate(Dialogs);
        const game = debate(canvasRef.current, dialogs);
    });

    return (
        <main className="flex min-h-screen max-h-screen min-w-full flex-col items-center justify-between">
            <h1
            className="py-10 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
            className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-500">Debat </span>climatique.
            </h1>
            <p className="text-center text-xl font-bold pb-4">{"Combat les stéréotypes climatiques dans un tribunal !"}</p>
            <canvas id="game-canvas" ref={canvasRef}/>
        </main>
    );
}
