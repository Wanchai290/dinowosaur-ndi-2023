"use client";
import Image from "next/image";
import debate from "./components/gameEngine";
// import kaboomGame from "./kaboomGame";
import React from "react";


export default function Home() {
	const canvasRef = React.useRef<HTMLCanvasElement>();
    React.useEffect(() => {
        if (!canvasRef.current) return;
        const game = debate(canvasRef.current);
    });

    return (
        <main className="flex min-h-screen max-h-screen min-w-full flex-col items-center justify-between">
            <canvas id="game-canvas" ref={canvasRef} />
        </main>
    );
}
