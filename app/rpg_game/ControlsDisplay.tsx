export default function ControlsDisplay() {
    return (
        <div style={{left: 54 + "rem"}}
             className="text-right absolute w-[50%] h-[100%] bg-[#efe3fa] dark:bg-purple-500">
            <h1 className="text-5xl mr-10">Contrôles</h1>
            <div className="p-4 mt-2.5 mr-20 text-3xl">
                <p>Avancer : W</p>
                <p>Reculer : S</p>
                <p>Aller a gauche : A</p>
                <p>Aller a droite : D</p>
            </div>
        </div>
    )
}