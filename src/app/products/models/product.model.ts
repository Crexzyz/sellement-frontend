import { FromData } from 'src/app/core/interfaces/from-data'

export class Product implements FromData {
	private _id: number = 0;
	private _name: string = "";
	private _description: string = "";
	private _stock: number = 0;
	private _purchasePrice: number = 0;
	private _sellPrice: number = 0;
	private _lastModified: Date = new Date();

	fromData(data: any): void {
		this.init(data.id, data.name, data.description, data.stock,
			data.purchase_price, data.sell_price, data.last_modified)
	}

	constructor(id: number = 0, name: string = "", description: string = "",
		stock: number = 0, purchasePrice: number = 0, sellPrice: number = 0,
		lastModified: string = "") {
		this.init(id, name, description, stock, purchasePrice, sellPrice, lastModified)
	}

	private init(id: number = 0, name: string = "", description: string = "",
		stock: number = 0, purchasePrice: number = 0, sellPrice: number = 0,
		lastModified: string = ""): void {
		this._id = id;
		this._name = name;
		this._description = description;
		this._stock = stock;
		this._purchasePrice = purchasePrice;
		this._sellPrice = sellPrice;
		// TODO: Change format in Django serializer
		this._lastModified = new Date(lastModified);
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

	public get purchasePrice(): number {
		return this._purchasePrice;
	}

	public get sellPrice(): number {
		return this._sellPrice;
	}

	public get lastModified(): Date {
		return this._lastModified;
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
	public set purchasePrice(value: number) {
		this._purchasePrice = value;
	}

	public set sellPrice(value: number) {
		this._sellPrice = value;
	}

	public set lastModified(value: Date) {
		this._lastModified = value;
	}
}
