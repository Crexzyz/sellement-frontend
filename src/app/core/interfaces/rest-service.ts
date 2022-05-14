export interface RestService<T> {
    getAll(page: number): Promise<any>;
    get(object: T): Promise<T>;
    create(object: T): Promise<T>;
    update(object: T): Promise<T>;
    delete(object: T): Promise<T>;
}
