import { ViewCallback } from "../interfaces/view-callback";

export class ActionButton {
    protected _routerLink: string = "";
    // Empty color falls back to Basic
    protected _color: string = "";
    protected _displayText: string = "Button";
    protected _disabled: boolean = false;
    protected _viewCallback!: ViewCallback;
    protected _viewCallbackMethod!: string;

    public withRouterLink(routerLink: string): ActionButton {
        this.routerLink = routerLink;
        return this;
    }

    public withColor(color: string): ActionButton {
        this.color = color;
        return this;
    }

    public withDisplayText(displayText: string): ActionButton {
        this.displayText = displayText;
        return this;
    }

    public withDisabled(value: boolean): ActionButton {
        this.disabled = value;
        return this;
    }

    public withViewCallback(viewCallback: ViewCallback, method: string): ActionButton {
        this.viewCallback = viewCallback;
        this.viewCallbackMethod = method;
        return this;
    }
    
    public get routerLink(): string {
        return this._routerLink;
    }
    
    public set routerLink(value: string) {
        this._routerLink = value;
    }
    
    public get color(): string {
        return this._color;
    }
    
    public set color(value: string) {
        this._color = value;
    }
    
    public get displayText(): string {
        return this._displayText;
    }

    public set displayText(value: string) {
        this._displayText = value;
    }

    public get disabled(): boolean {
        return this._disabled;
    }
    
    public set disabled(value: boolean) {
        this._disabled = value;
    }

    public get viewCallback(): ViewCallback {
        return this._viewCallback;
    }

    public set viewCallback(callback: ViewCallback) {
        this._viewCallback = callback;
    }

    public get viewCallbackMethod(): string {
        return this._viewCallbackMethod;
    }

    public set viewCallbackMethod(value: string) {
        this._viewCallbackMethod = value;
    }
}