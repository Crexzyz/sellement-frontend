import { DataModel } from "src/app/core/models/data-model.model";

export class Product extends DataModel {
    private _id: number = 0;
    private _name: string = "";
    private _description: string = "";
    private _stock: number = 0;
    private _purchasePrice: number = 0;
    private _sellPrice: number = 0;
    private _lastModified: Date = new Date();

    constructor(id: number = 0, name: string = "", description: string = "",
        stock: number = 0, purchasePrice: number = 0, sellPrice: number = 0,
        lastModified: string = "") {
        super();
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
        this._lastModified = new Date(lastModified);
    }

    override fromJson(data: any): void {
        this.init(data.id, data.name, data.description, data.stock,
            data.purchase_price, data.sell_price, data.date_modified)
    }

    override toJson(): {[key: string]: string} {
        return {
            "id": this.id.toString(),
            "name": this.name,
            "description": this.description,
            "stock": this.stock.toString(),
            "purchase_price": this.purchasePrice.toString(),
            "sell_price": this.sellPrice.toString(),
            "last_modified": this.lastModified.toDateString()
          }
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
        if(value < 0)
            throw RangeError("Stock can not be negative");

        this._stock = value;
    }
    public set purchasePrice(value: number) {
        if(value < 0)
            throw RangeError("Purchase price can not be negative");

        this._purchasePrice = value;
    }

    public set sellPrice(value: number) {
        if(value < 0)
            throw RangeError("Sell price can not be negative");

        this._sellPrice = value;
    }

    public set lastModified(value: Date) {
        this._lastModified = value;
    }

    override getTitle(): string {
        return this.name
    }

    override getDescription(): string {
        return this.description
    }

    override getValues(): { [key: string]: string; } {
        return {
            "Stock": this.stock.toString(),
            "Purchase price": this.purchasePrice.toString(),
            "Sell price": this.sellPrice.toString(),
            "Last modified": this.lastModified.toLocaleString()
        }
    }
}
