import {Interactable} from "@/app/rpg_game/interactable/Interactable";

export class Dialog {

    author: Interactable;
    text: Array<string>;

    constructor(someGuy: Interactable, text: Array<string>) {
        this.author = someGuy;
        this.text = text;
    }

}