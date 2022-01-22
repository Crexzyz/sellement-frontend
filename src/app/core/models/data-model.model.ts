import { FromData } from "../interfaces/from-data";

export abstract class DataModel implements FromData {
    abstract fromData(data: any): void;
}
