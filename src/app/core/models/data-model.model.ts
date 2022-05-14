import { DetailsGettable } from "../interfaces/details-gettable";

export abstract class DataModel implements DetailsGettable {
    abstract fromJson(data: any): void;
    abstract toJson(): {[key: string]: string};

    // Details functions
    abstract getTitle(): string;
    abstract getDescription(): string
    abstract getValues(): { [key: string]: string; }
}
