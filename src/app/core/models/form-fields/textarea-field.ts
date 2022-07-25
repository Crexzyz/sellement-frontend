import { TextField } from "./text-field";

export class TextareaField extends TextField {
    public static override readonly TYPE: string = "textarea";
    rows: number;

    constructor(options: {
        value?: string;
        name?: string;
        order?: number;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
        maxLength?: number;
        rows?: number;
    } = {}) {
        super(options)
        this.rows = options.rows || 1;
        this.controlType = TextareaField.TYPE;
    }
}
