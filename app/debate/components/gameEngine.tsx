import kaboom from "kaboom";
import { MutableRefObject } from "react";


export default function debate(canvasref: HTMLCanvasElement)
{
    const assetRoot = "debate/assets/"
    const game = kaboom({
        width: canvasref.parentElement?.clientWidth - 60,
        height: canvasref.parentElement?.clientHeight,
        // if you don't want to import to the global namespace
        global: false,
        // if you don't want kaboom to create a canvas and insert under document.body
        canvas: canvasref,
    });

    game.loadSprite("back" , assetRoot + "Courtroom.jpg");

    game.add([
        game.sprite("back"),
        game.pos(game.width() / 2, game.height() / 2),
        game.anchor("center"),
        game.scale(2),
    ]);

    game.loop(1, () => {
        //
    })

    //game.loadSprite()
    
    return game;
}