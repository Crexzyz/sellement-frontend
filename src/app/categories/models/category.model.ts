import { DataModel } from "src/app/core/models/data-model.model";

/**
 * Categories that can be associated to Products.
 * @see Product for Product details.
 */
export class Category extends DataModel {
    private _name: string = "";
    
    fromJson(data: any): void {
        this.name = data.name || "";
    }

    toJson(): { [key: string]: string; } {
        return {
            "name": this.name
        };
    }

    getTitle(): string {
        return this.name;
    }

    getDescription(): string {
        return "";
    }

    getValues(): { [key: string]: string; } {
        return {};
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }
}
