"use client";
import Image from "next/image";
import debate from "./components/gameEngine";
// import kaboomGame from "./kaboomGame";
import React from "react";
import Dialogs from "./components/Dialog";
import { DialogDebate } from "./models/debate.model";


export default function Home() {
	const canvasRef = React.useRef<HTMLCanvasElement>();
    React.useEffect(() => {
        if (!canvasRef.current) return;
        let dialogs = new DialogDebate(Dialogs);
        const game = debate(canvasRef.current, dialogs);
    });

    return (
        <main className="flex min-h-screen max-h-screen min-w-full flex-col items-center justify-between">
            <canvas id="game-canvas" ref={canvasRef} />
        </main>
    );
}
