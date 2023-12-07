import {CardModel} from "../models/card.model";

import {tinderDatas} from "../assets/data"

interface GameModel {
  leftCards: CardModel[];
  score: number;
  currentCard: CardModel;
}

let currentGame:  GameModel;

const defaultCardNumber = 6;

export function startGame(nbCards: number) {
  nbCards = nbCards > 0 ? nbCards : defaultCardNumber;
  let cards = getNCards(nbCards);
  let currentCard = cards.shift() as CardModel;
  currentGame = {leftCards: cards, score: 0, currentCard: currentCard};

}

export function nextCard(): CardModel | undefined {
  let nextCard = currentGame.leftCards.shift();
  if (nextCard !== undefined) {
    currentGame.currentCard = nextCard;
  }
  return nextCard;
}

export function setUserResponse(response: boolean): number {
  return (response == currentGame.currentCard.question.answer) ? currentGame.score += 1 : currentGame.score;
}

function getNCards(numberCards: number): CardModel[] {
  return numberCards > 0 ? [...tinderDatas].sort(() => 0.5 - Math.random()).slice(0, numberCards) : [];
}
