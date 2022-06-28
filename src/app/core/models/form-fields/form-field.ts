export class FormField<T> {
    value: T | undefined;
    name: string;
    hidden: boolean;
    required: boolean;
    type: string;
    label: string;
    
    constructor(options: {
        value?: T;
        name?: string;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
    } = {}) {
        this.value = options.value;
        this.name = options.name || "";
        this.hidden = options.hidden || false;
        this.required = options.required || false;
        this.type = options.type || "";
        this.label = options.label || "";
    }

    get valueType(): string {
        return typeof this.value;
    }
}
