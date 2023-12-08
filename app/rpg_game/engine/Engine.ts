import {LevelManager} from "@/app/rpg_game/engine/LevelManager";
import {CanvasDrawer} from "@/app/rpg_game/engine/CanvasDrawer";

class Engine {
    levelManager: LevelManager;
    canvasDrawer: CanvasDrawer;

    public draw() {
        this.canvasDrawer.hello();
    }

    constructor() {
        this.levelManager = new LevelManager();
        this.canvasDrawer = CanvasDrawer.constructor();
    }
}

export default Engine;