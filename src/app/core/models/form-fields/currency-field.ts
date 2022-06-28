import { NumberField } from "./number-field";

export class CurrencyField extends NumberField {
    override type = "currency";
    symbol: string;
}
