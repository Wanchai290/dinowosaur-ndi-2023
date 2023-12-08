import {GameCoords} from "@/app/rpg_game/map/GameCoords";
import {Dialog} from "@/app/rpg_game/dialog/Dialog";
import {Sprite} from "@/app/rpg_game/sprite/Sprite";

export class Interactable {
    sprite: Sprite;
    name: string;
    dialog: Dialog;
    position: GameCoords;
    isImposter: boolean; // this is whether the person speaks on bad facts

    constructor(spritePath: string, name: string, dialog: Dialog, position: GameCoords, isImposter: boolean) {
        // load sprite
        this.name = name;
        this.dialog = Dialog;
        this.position = position;
        this.isImposter = isImposter;
    }

}