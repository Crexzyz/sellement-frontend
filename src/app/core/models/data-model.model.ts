export abstract class DataModel {
    abstract fromJson(data: any): void;
    abstract toJson(): {[key: string]: string};
}
