'use client';
import CardComponent from "@/app/tinder/components/card.component";

import {Button} from "flowbite-react";
import { CardModel } from "../models/card.model";
import { startGame, nextCard, setUserResponse } from "@/app/tinder/components/tinderGameService";
import { useState } from "react";

export default function CardLoaderComponent() {
  const [currentCard , setCurrentCard] = useState<CardModel | undefined>();
  const [questionMode, setQuestionMode] = useState<boolean>();
  const [score, setScore] = useState<number>();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
    
  function setNextCard(): void {
    setCurrentCard(nextCard());
    setQuestionMode(true);
    setQuestionNumber(questionNumber + 1);
  }
  
  function answer(response: boolean) {
    setScore(setUserResponse(response));
    setQuestionMode(false);
    setAnswerCorrect(response == currentCard?.question.answer);
  }
  
  function newGame(){
    startGame(10);
    setCurrentCard(nextCard());
    setQuestionMode(true);
    setQuestionNumber(1);
    setScore(0);
  }

  if (currentCard){
    return(
      <div className="flex flex-col items-center w-full h-screen">
        <p>{questionNumber} / 10</p>
        <CardComponent data={currentCard}
          isQuestion={questionMode}
          answerCorrect={answerCorrect}
          nextCard={setNextCard}
          answer={answer}
        />
      </div>
    );
  } else {
    if (score) {
      return (
        <div className="flex flex-col items-center w-full h-screen">
          <Button outline gradientDuoTone="redToYellow"  onClick={() => {
            newGame();
          }}>Lancer la partie</Button>
          <p>Quizz terniné</p>
          <p>Votre score : {score} / 10</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center w-full h-screen">
          <Button outline gradientDuoTone="redToYellow"  onClick={() => {
            newGame();
          }}>Lancer la partie</Button>
        </div>
      );
    }
  }
}