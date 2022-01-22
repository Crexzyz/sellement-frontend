import { FromData } from 'src/app/core/interfaces/from-data'

export class Product implements FromData {
	private _id: number = 0;
	private _name: string = "";
	private _description: string = "";
	private _stock: number = 0;
	private _purchase_price: number = 0;
	private _sell_price: number = 0;
	private _last_modified: Date = new Date();

	fromData(data: any): void {
		this.init(data.id, data.name, data.description, data.stock,
			data.purchase_price, data.sell_price, data.last_modified)
	}

	constructor(id: number = 0, name: string = "", description: string = "",
		stock: number = 0, purchase_price: number = 0,
		sell_price: number = 0, last_modified: string = "") {
		this.init(id, name, description, stock, purchase_price, sell_price, last_modified)
	}

	private init(id: number = 0, name: string = "", description: string = "",
		stock: number = 0, purchase_price: number = 0, sell_price: number = 0,
		last_modified: string = ""): void {
		this._id = id;
		this._name = name;
		this._description = description;
		this._stock = stock;
		this._purchase_price = purchase_price;
		this._sell_price = sell_price;
		// TODO: Change format in Django serializer
		this._last_modified = new Date(last_modified);
	}

	public get id(): number {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}

	public get description(): string {
		return this._description;
	}

	public get stock(): number {
		return this._stock;
	}

	public get purchase_price(): number {
		return this._purchase_price;
	}

	public get sell_price(): number {
		return this._sell_price;
	}

	public get last_modified(): Date {
		return this._last_modified;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set name(value: string) {
		this._name = value;
	}

	public set description(value: string) {
		this._description = value;
	}

	public set stock(value: number) {
		this._stock = value;
	}
	public set purchase_price(value: number) {
		this._purchase_price = value;
	}

	public set sell_price(value: number) {
		this._sell_price = value;
	}

	public set last_modified(value: Date) {
		this._last_modified = value;
	}
}
