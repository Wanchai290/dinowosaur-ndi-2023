export class Reason {
    sources: Array<URL>;
    explanation: string;

    constructor(sources: Array<URL>, explanation: string) {
        this.sources = sources;
        this.explanation = explanation;
    }
}