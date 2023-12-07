export interface Question {
    title: string,
    question: string,
    answer: boolean,
    imageLink: string
}

export interface Answer {
    imageLink: string,
    text: string,
    link: string
}

export interface Card {
    question: Question,
    answer: Answer
}