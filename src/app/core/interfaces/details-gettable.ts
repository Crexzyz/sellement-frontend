export interface DetailsGettable {
    getTitle(): string;
    getDescription(): string
    getValues(): {[key: string]: string}
}
