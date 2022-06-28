import { FormField } from "./form-field"

export class TextField extends FormField<string> {
    override type = "text";
    maxLength: number;

    constructor(options: {
        value?: string;
        name?: string;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
        maxLength?: number;
    } = {}) {
        super(options)
        this.maxLength = options.maxLength || 0;
    }
}
