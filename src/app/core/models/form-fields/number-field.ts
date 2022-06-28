import { FormField } from "./form-field"

export class NumberField extends FormField<number> {
    override type = "number";
    min: number;
}
