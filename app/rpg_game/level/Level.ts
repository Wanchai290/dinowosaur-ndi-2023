import {GameMap} from "@/app/rpg_game/map/GameMap";
import {Reason} from "@/app/rpg_game/reason/Reason";

export class Level {
    category: LevelCategory;
    map: GameMap;
    reasons: Array<Reason>;

    constructor(category: LevelCategory, ) {
    }
}
