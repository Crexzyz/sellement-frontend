import { Newable } from "../interfaces/newable";
import { DataModel } from "./data-model.model";

export class PaginatedContainer<T extends DataModel> {
    private _count: number;
    private _next: string;
    private _prev: string;
    private _results: T[];

	fromData(data: any, type: Newable<T>): void {
		this._count = data.count || 0;
		this._next = data.next || "";
		this._prev = data.prev || "";
		this._results = []

		data.results.forEach((element: any) => {
			let instance: T = new type();
			instance.fromData(element);
			this._results.push(instance);
		});
	}

	constructor(count: number = 0, next: string = "", prev: string = "", results: T[] = []) {
		this._count = count;
		this._next = next;
		this._prev = prev;
		this._results = results;
	}

    public get count(): number {
        return this._count;
    }
    
    public get next(): string {
        return this._next;
    }

	public get prev(): string {
		return this._prev;
	}

	public get results(): T[] {
		return this._results;
	}
}
