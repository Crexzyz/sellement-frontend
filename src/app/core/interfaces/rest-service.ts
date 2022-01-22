import { Observable } from "rxjs";

export interface RestService<T> {
    getAll(): Observable<T[]>;
    get(object: T): Promise<T>;
    create(object: T): Promise<T>;
    update(object: T): Promise<T>;
    delete(object: T): Promise<T>;
}
