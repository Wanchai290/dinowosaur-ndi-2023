export default interface SpriteModel {
    path: string;
    facing: string; // 'left' | 'right'
}

export interface AnswerModel {
    text: string;
    continue: number;
}

export interface DialogModel {
    id: number;
    speaker: SpriteModel;
    text: string;
    forceAnswer: boolean;
    canBeAnswered: boolean;
    answers: AnswerModel[];
    continue: number;
}