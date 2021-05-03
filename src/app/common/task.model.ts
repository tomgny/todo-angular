export class Task {
    text!: string;
    status!: string;

    constructor(text: string, status: string) {
        this.text = text;
        this.status = status;
    }
}
