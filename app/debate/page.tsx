"use client";
import Image from "next/image";
import debate from "./components/gameEngine";
// import kaboomGame from "./kaboomGame";
import React from "react";
import { DialogDebate } from "./models/debate.model";


export default function Home() {
	const canvasRef = React.useRef<HTMLCanvasElement>();
    React.useEffect(() => {
        if (!canvasRef.current) return;
        let dialogs: DialogDebate = new DialogDebate([
            {
                id: 0,
                speaker: {
                    path: "acc0",
                    facing: "left",
                },
                text: "I'm the prosecutor.",
                forceAnswer: false,
                canBeAnswered: true,
                answers: [
                    {
                        text: "I'm the defendant.",
                        continue: 1,
                        weight: 1,
                    },
                    {
                        text: "I'm the judge.",
                        continue: 1,
                        weight: 1,
                    },
                    {
                        text: "I'm the jury.",
                        continue: 1,
                        weight: 1,
                    },
                ],
                continue: 1,
            },
            {
                id: 1,
                speaker: {
                    path: "acc1",
                    facing: "left",
                },
                text: "SO YOU FLOP !",
                forceAnswer: false,
                canBeAnswered: false,
                answers: [],
                continue: 0,
            }
        ]);
        const game = debate(canvasRef.current, dialogs);
    });

    return (
        <main className="flex min-h-screen max-h-screen min-w-full flex-col items-center justify-between">
            <canvas id="game-canvas" ref={canvasRef} />
        </main>
    );
}
