import { TextField } from "./text-field";

export class TextareaField extends TextField {
    override type = "textarea";
    rows: number;

    constructor(options: {
        value?: string;
        name?: string;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
        maxLength?: number;
        rows?: number;
    } = {}) {
        super(options)
        this.rows = options.rows || 1;
    }
}
