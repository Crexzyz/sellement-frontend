import { BaseFormField } from "./base-form-field"

export class NumberField extends BaseFormField<number> {
    public static override readonly TYPE: string = "number";
    min: number;

    constructor(options: {
        value?: number;
        name?: string;
        order?: number;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
        min?: number;
    } = {}) {
        super(options)
        this.min = options.min || 0;
        this.controlType = NumberField.TYPE;
    }
    
    get valueString(): string {
        return this.value?.toString() || "";
    }
}
