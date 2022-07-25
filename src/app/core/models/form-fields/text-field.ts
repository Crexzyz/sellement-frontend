import { BaseFormField } from "./base-form-field"

export class TextField extends BaseFormField<string> {
    public static override readonly TYPE: string = "text";
    maxLength: number;
    
    constructor(options: {
        value?: string;
        name?: string;
        order?: number;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
        maxLength?: number;
    } = {}) {
        super(options);
        this.maxLength = options.maxLength || 0;
        this.controlType = TextField.TYPE;
    }
    
    get valueString(): string {
        return this.value || "";
    }
}
