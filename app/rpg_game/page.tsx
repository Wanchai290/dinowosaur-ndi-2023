import Engine from "@/app/rpg_game/engine/Engine";

function GameCanvasComponent() {
    console.log("helo");
    const canvasId = "gameCanvas";
    let engine = new Engine();
    engine.draw();
    return engine.canvasDrawer.canvas;
}

export default function Page() {
    return <div>
        <GameCanvasComponent />
    </div>;
}