import { DetailsGettable } from "../interfaces/details-gettable";

/**
 * Abstract class that represents the capabilities of a data model. That is,
 * an object that gets stored persisently on a backend's database.
 */
export abstract class DataModel implements DetailsGettable {
    abstract fromJson(data: any): void;
    abstract toJson(): {[key: string]: string};
    
    // Details functions
    abstract getTitle(): string;
    abstract getDescription(): string
    abstract getValues(): { [key: string]: string; }
}
