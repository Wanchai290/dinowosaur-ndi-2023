"use client"
import {useEffect, useState} from "react";
import NPCComponent from "./NPCComponent";
import ControlsDisplay from "@/app/rpg_game/ControlsDisplay";



export default function GameMapComponent() {
	
  const [currentDialog, setCurrentDialog] = useState(undefined);
  const [dialogId, setDialogId] = useState(0);
  // load image

  useEffect(() => {

  }, [])

  return (
	  <div className="flex justify-center items-center h-full w-full overflow-scroll">
		  <ControlsDisplay />
		  <div
			  className="w-full h-full"
			  style={{backgroundImage: "url(rpg_game_assets/background/beach.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat", position:"relative", height: "1024px", width:"1024px", overflow:"hidden"}}>
				  <NPCComponent isPlayer={true} baseY={0} baseX={0} sprite="rpg_game_assets/girl_down.png" dialogSetter={setCurrentDialog} dialogId={dialogId} dialogIdSetter={setDialogId} map={0}/>
				  <NPCComponent isPlayer={false} baseY={10} baseX={-15} sprite="rpg_game_assets/citadin1.png" dialogSetter={()=>{}}/>
				  <NPCComponent isPlayer={false} baseY={-12} baseX={5} sprite="rpg_game_assets/paysan3.png" dialogSetter={()=>{}}/>
				  {currentDialog}
		  </div>
	  </div>
  )
}

