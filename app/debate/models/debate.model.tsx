export default interface SpriteModel {
    path: string;
    facing: string; // 'left' | 'right'
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

    constructor(dialogs: DialogModel[]) {
        this.dialogs = dialogs;
        this.dialogs_id = dialogs.map((dialog) => dialog.id);
        this.currentDialog = 0;
    }

    getDialog(id: number): DialogModel {
        return this.dialogs[this.dialogs_id.indexOf(id)];
    }

    getCurrentDialog(): DialogModel {
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
        this.currentDialog = this.answerCurrentDialog(answer);
        return this.getCurrentDialog();
    }

}