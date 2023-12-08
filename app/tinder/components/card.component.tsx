'use client';
import { CardModel } from '../models/card.model';
import { Button, Card } from "flowbite-react";
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
interface Props {
    data: CardModel,
    isQuestion: boolean | undefined,
    answerCorrect: boolean,
    nextCard: Function,
    answer: Function
}

export default function CardComponent({data, isQuestion, answerCorrect, nextCard, answer}: Readonly<Props>) {
  if(isQuestion){
    return (
      <div className="w-4/5 md:w-3/5 xl:w-2/5 2xl:w-1/5">
        <Card
          className="max-w p-6"
          imgAlt={data.question.title}
          imgSrc={data.question.imageLink}
        >
          <h5 className="text-2xl font-bold tracking-tight">{data.question.title}</h5>
          <p>
            {data.question.question}
          </p>
        </Card>
        <div className="flex flex-row justify-between pt-2">
          <Button color="indigo"
            className="w-10 h-10 rounded-full p-10"
            onClick={() => {answer(false)}}>
            <HiOutlineX className="h-10 w-10"/>
          </Button>
          <Button color="lime"
            className="w-10 h-10 rounded-full p-10"
            onClick={() => {answer(true)}}>
            <HiOutlineCheck className="h-10 w-10"/>
          </Button>
        </div>
      </div>

    );
  } else {
    let bgColor: string;
    if (answerCorrect){
      bgColor = "green";
    } else {
      bgColor = "red";
    }
    return(
      <div className="w-4/5 md:w-3/5 xl:w-2/5 2xl:w-1/5">
        <Card
          className={`max-w p-6 bg-${bgColor}-100`}
          imgAlt={data.question.title}
          imgSrc={data.answer.imageLink}
        >
          <h5 className="text-2xl font-bold tracking-tight">{data.question.answer ? "Vrai" : "Faux"}</h5>
          <p>
            {data.answer.text}
          </p>
          <Button outline gradientDuoTone="redToYellow" onClick={() => window.open(data.answer.link, '_blank')}  >
            {"Plus d\'informations"}
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
        <div className="flex flex-row justify-center pt-8">
          <Button outline gradientDuoTone="redToYellow"  onClick={() => {nextCard()}}>Prochaine question</Button>
        </div>
      </div>
    );
  }
}