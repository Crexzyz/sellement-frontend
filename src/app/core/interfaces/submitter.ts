export interface Submitter {
    submit(): Promise<boolean>;
}