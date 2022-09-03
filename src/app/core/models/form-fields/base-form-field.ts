export type FormField = string | number

export abstract class BaseFormField<T extends FormField> {
    public static readonly TYPE: string = "base"
    value: T | undefined;
    name: string;
    order: number;
    hidden: boolean;
    required: boolean;
    type: string;
    controlType: string;
    label: string;
    
    constructor(options: {
        value?: T;
        name?: string;
        order?: number;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
    } = {}) {
        this.value = options.value;
        this.name = options.name || "";
        this.order = options.order || 0;
        this.hidden = options.hidden || false;
        this.required = options.required || false;
        this.type = options.type || "";
        this.controlType = BaseFormField.TYPE;
        this.label = options.label || "";
    }

    /**
     * Returns the value's string representation.
     */
    abstract get valueString(): string;

    /**
     * Returns the class' default value.
     */
    abstract get defaultValue(): T;

    /**
     * Returns the value's type as a string.
     */
    get valueType(): string {
        return typeof this.value;
    }
}
