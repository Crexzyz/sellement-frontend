import { NumberField } from "./number-field";

export class CurrencyField extends NumberField {
    public static override readonly TYPE: string = "currency";
    symbol: string;

    constructor(options: {
        value?: number;
        name?: string;
        order?: number;
        hidden?: boolean;
        required?: boolean;
        type?: string;
        label?: string;
        min?: number;
        symbol?: string;
    } = {}) {
        super(options)
        this.symbol = options.symbol || "$";
        this.controlType = CurrencyField.TYPE;
    }

    override get defaultValue(): number {
        return 0.0; 
     }
}
