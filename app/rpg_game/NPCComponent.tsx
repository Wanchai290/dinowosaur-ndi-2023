'use client'
import { KeyboardEvent, useEffect, useState } from "react";

import DialogBox from "./DialogBox";

import {dialogs} from "./Dialogs";

enum Direction {
	UP,
	LEFT,
	DOWN,
	RIGHT
}

const leftDistanceLimit = -18;
const rightDistanceLimit = 40;
const topDistanceLimit = -10;
const bottomDistanceLimit = 14;

interface Props {
	isPlayer: boolean;
	baseX: number;
	baseY: number;
	sprite: string;
	dialogSetter: Function|null;
	dialogId:number|null;
	dialogIdSetter: Function|null;
	map: number|null;

}



const mapCoord = [
  [
    {
      x:10,
      y:-15,
      dialogId: 0,
    },
    {
      x: -12,
      y: 5,
      dialogId: 1,
    }
  ]
]

export default function NPCComponent({isPlayer, baseX, baseY, sprite, dialogSetter, dialogId = null, dialogIdSetter = null, map = null}: Props) {
	
  const [mapleftOffset, setleftOffset] = useState<number>(baseX);
  const [maptopOffset, settopOffset] = useState<number>(baseY);
  const [playerSpritePath,  setPlayerSpritePath] = useState<string>(sprite);
  const pixelDelta = 1;

  useEffect(() => {
  }, []);

  function setOffset(offsetX: number, offsetY: number) {
    setleftOffset(offsetX);
    settopOffset(offsetY);
  }



  function nextDialog() {
    if (dialogIdSetter === null || dialogSetter === null) return;
    if (dialogId === null) return;
    let nextDialogId = (dialogId) + 1;
    let npc = mapCoord[map ? map : 0].filter(npc => {
      return Math.abs(npc.x - mapleftOffset) < 10 && Math.abs(npc.y - maptopOffset) < 10;
    })[0];
    console.log(npc);
    if (npc) {
      if (dialogs[npc.dialogId][dialogId]) {
        dialogSetter((<DialogBox  dialog={dialogs[npc.dialogId][dialogId].dialog} teller={dialogs[npc.dialogId][dialogId].name} />));
      	dialogIdSetter(nextDialogId);
      }
      else {
        dialogSetter(undefined);
      	dialogIdSetter(0);
      }
      
    }
	  
  }


  const keyDownHandler = (e: KeyboardEvent<Element>) => {
	  let leftOffset = mapleftOffset;
	  let topOffset = maptopOffset;
	  let sprite = Direction.UP;
	  switch (e.code) {
    case "KeyZ":
      topOffset = topOffset - pixelDelta < topDistanceLimit ? topOffset : topOffset - pixelDelta
		  sprite = Direction.UP;
      break;
    case "KeyQ":
		  leftOffset = leftOffset - pixelDelta < leftDistanceLimit ? leftOffset : leftOffset - pixelDelta
      sprite = Direction.LEFT;
      break;
    case "KeyD":
		  leftOffset = leftOffset + pixelDelta > rightDistanceLimit ? leftOffset : leftOffset + pixelDelta
      sprite = Direction.RIGHT;
      break;
    case "KeyS":
		  topOffset = topOffset + pixelDelta > bottomDistanceLimit ? topOffset : topOffset + pixelDelta
		  sprite = Direction.DOWN;
      break;
	  case "KeyX":
		  nextDialog();
		  break;
    }

    if (!dialogId) return;
    if(dialogId <= 0) {
      setOffset(leftOffset, topOffset);
      handleDirectionPlayerSprite(sprite);
    }
	  
  };

  function handleDirectionPlayerSprite(dir: Direction) {
    switch (dir) {
    case Direction.UP:
      setPlayerSpritePath("rpg_game_assets/girl_up.png")
      break;
    case Direction.DOWN:
      setPlayerSpritePath("rpg_game_assets/girl_down.png")
      break;
    case Direction.RIGHT:
      setPlayerSpritePath("rpg_game_assets/girl_right.png")
      break;
	  case Direction.LEFT:
		  setPlayerSpritePath("rpg_game_assets/girl_left.png")
      break;
    }
  }



  return (
	  <div id="active"
		  tabIndex={0}
		  className={"transition delay-75 ease-in-out"}
		  autoFocus={isPlayer}
		  onKeyDown={isPlayer ? keyDownHandler : () =>{}}
	    style={{position:"absolute", left: 50 + mapleftOffset + "%", top: 50 + maptopOffset + "%" }}>
      	<img src={playerSpritePath} alt="" style={{height:"34px", width:"34px"}}/>
    </div>
  )
}