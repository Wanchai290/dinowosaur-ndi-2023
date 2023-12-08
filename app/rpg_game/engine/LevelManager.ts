export class LevelManager {
    levels: Array<Level>;
    idx_level: number;

    /**
     * Loads all the levels from a given directory
     */
    public load_levels() {
        // get all the sprites for the maps from a directory
        // load them inside the level manager
    }

    /**
     * Returns the new level to display and increment by one the index
     * If no more levels are available, return undefined
     */
    public get_next_level(): Level | undefined {
        let lv = this.levels.at(this.idx_level);
        this.idx_level = this.idx_level + 1;
        return lv;
    }

    constructor() {
        this.levels = new Array();
        this.idx_level = 0;
    }
}