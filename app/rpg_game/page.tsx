"use client"

import GameMapComponent from "@/app/rpg_game/GameMapComponent";
import {useState} from "react";
import NPCComponent from "@/app/rpg_game/NPCComponent";

enum Direction {
    UP,
    LEFT,
    DOWN,
    RIGHT
}

export default function Page() {
    const [mapOffsetXPixels, setOffsetXPixels] = useState<number>(0);
    const [mapOffsetYPixels, setOffsetYPixels] = useState<number>(-500);
    const [playerSpritePath,  setPlayerSpritePath] = useState<string>("rpg_game_assets/girl_down.png");
    const pixelDelta = 50;

    function setOffset(offsetX, offsetY) {
        setOffsetXPixels(offsetX);
        setOffsetYPixels(offsetY);
    }


    const keyDownHandler = (e) => {
        switch (e.keyCode) {
            case 83:
                setOffset(mapOffsetXPixels, mapOffsetYPixels - pixelDelta);
                handleDirectionPlayerSprite(Direction.UP);
                break;
            case 68:
                handleDirectionPlayerSprite(Direction.LEFT);
                setOffset(mapOffsetXPixels - pixelDelta, mapOffsetYPixels);
                break;
            case 81:
                handleDirectionPlayerSprite(Direction.RIGHT);
                setOffset(mapOffsetXPixels + pixelDelta, mapOffsetYPixels);
                break;
            case 90:
                handleDirectionPlayerSprite(Direction.DOWN);
                setOffset(mapOffsetXPixels, mapOffsetYPixels + pixelDelta);
                break;
        }
    };

    function handleDirectionPlayerSprite(dir: Direction) {
        switch (dir) {
            case Direction.UP:
                setPlayerSpritePath("rpg_game_assets/girl_up.png")
                break;
            case Direction.DOWN:
                setPlayerSpritePath("rpg_game_assets/girl_down.png")
                break;
            case Direction.RIGHT:
                setPlayerSpritePath("rpg_game_assets/girl_right.png")
                break;
        }
        console.log("changed");
    }

    return <div>
        <GameMapComponent
            mapOffsetXPixels={mapOffsetXPixels}
            mapOffsetYPixels={mapOffsetYPixels}
            handler={keyDownHandler}
        />
        <NPCComponent
            imagePath={playerSpritePath}/>
    </div>
}