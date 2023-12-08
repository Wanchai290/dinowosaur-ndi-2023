"use client"
import {useEffect, useState} from "react";

interface Props {
    mapOffsetXPixels: number,
    mapOffsetYPixels: number,
    handler: Function
}

export default function GameMapComponent({mapOffsetXPixels, mapOffsetYPixels, handler}: Props) {

    // load image

    useEffect(() => {

    }, [])

    return <div
        className="w-[150%] h-[150%]"
        tabIndex="0"
        style={{marginLeft: mapOffsetXPixels + "px", marginTop: mapOffsetYPixels + "px"}}
        onKeyDown={handler}>
        <img id="map"  className="w-full h-full" src="rpg_game_assets/background/beach.png"></img>
    </div>
}

