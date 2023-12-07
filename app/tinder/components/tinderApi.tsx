import { Card } from "../models/card.model";

import {tinderDatas} from "../assets/data"


export default function TinderApi() {


    function getAllCards(): Card[] {
        return tinderDatas;
    }

    function getNCards(numberCards: number): Card[] {
        
        return numberCards > 0 ? [...tinderDatas].sort(() => 0.5 - Math.random()).slice(0, numberCards) : [];
    }
  }