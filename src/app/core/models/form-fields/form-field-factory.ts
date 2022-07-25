import { BaseFormField } from "./base-form-field";
import { CurrencyField } from "./currency-field";
import { NumberField } from "./number-field";
import { TextField } from "./text-field";
import { TextareaField } from "./textarea-field";

export class FormFieldFactory {
    public static createFields(data: any): BaseFormField<any>[] {
        if (data.fields === undefined) {
            throw new Error("No fields");
        }
        let rawFields = data.fields as any[];
        let fields = rawFields.map(this.createField)
        return fields;
    }

    static createField(data: any): BaseFormField<any> {
        switch(data.type) {
            case TextField.TYPE:
                return new TextField(data);
            case TextareaField.TYPE:
                return new TextareaField(data);
            case NumberField.TYPE:
                return new NumberField(data);
            case CurrencyField.TYPE:
                return new CurrencyField(data);
            default:
                throw new Error("Unsupported input type");
        }
    }
}