export default interface SpriteModel {
    path: string;
    facing: string; // 'left' | 'right'
    name: string;
}

export interface AnswerModel {
    text: string;
    continue: number;
    weight: number;
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

export class DialogDebate {
    dialogs: DialogModel[];
    dialogs_id: number[];
    currentDialog: number;
    nbBonneReponse: number;

    constructor(dialogs: DialogModel[]) {
        this.dialogs = dialogs;
        this.dialogs_id = dialogs.map((dialog) => dialog.id);
        this.currentDialog = 0;
        this.nbBonneReponse = 0;
    }

    getDialog(id: number): DialogModel {
        return this.dialogs[this.dialogs_id.indexOf(id)];
    }

    getCurrentDialog(): DialogModel {
        if (this.currentDialog === -1) {
            this.setFinished();
        }
        return this.dialogs[this.dialogs_id.indexOf(this.currentDialog)];
    }

    getAnswers(): AnswerModel[] {
        return this.getCurrentDialog().answers;
    }

    continueCurrentDialog(): number {
        if (this.getCurrentDialog().forceAnswer) {
            return this.currentDialog;
        }
        return this.getCurrentDialog().continue;
    }

    answerCurrentDialog(answer: AnswerModel): number {
        return answer.continue;
    }

    nextDialog(): DialogModel {
        this.currentDialog = this.continueCurrentDialog();
        return this.getCurrentDialog();
    }

    nextDialogAnswer(answer: AnswerModel): DialogModel {
        this.nbBonneReponse += answer.weight;
        this.currentDialog = this.answerCurrentDialog(answer);
        return this.getCurrentDialog();
    }

    setFinished(): void {
        if (this.nbBonneReponse >= 0) {
            this.currentDialog = 64;
        } else {
            this.currentDialog = 70;
        }
    }

}