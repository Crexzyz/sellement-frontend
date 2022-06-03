import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionableDetailedModelComponent } from 'src/app/core/components/actionable-detailed-model/actionable-detailed-model.component';
import { ResolvedModel } from 'src/app/core/interfaces/resolved-model';
import { ViewCallback } from 'src/app/core/interfaces/view-callback';
import { ActionButton } from 'src/app/core/models/action-button.model';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: '../../../core/components/actionable-detailed-model/actionable-detailed-model.component.html',
  styleUrls: [
    '../../../../styles.scss',
    '../../../core/components/actionable-detailed-model/actionable-detailed-model.component.scss'
  ]
})
export class ProductDeleteComponent extends ActionableDetailedModelComponent<Product> implements ViewCallback {
  private static deleteCallback: string = "delete"

  constructor(route: ActivatedRoute, private service: ProductsService, private router: Router) {
    super(route, new Product())

    let cancelButton = new ActionButton()
      .withRouterLink(`/products/details/${this.model.id}`)
      .withColor("primary")
      .withDisplayText("Cancel");

    let deleteButton = new ActionButton()
      .withViewCallback(this, ProductDeleteComponent.deleteCallback)
      .withColor("warn")
      .withDisplayText("Confirm deletion");

    this.buttons.push(cancelButton, deleteButton);
    this.helpMessage = "Are you sure you want to delete this product?"
  }
  
  private delete(): void {
    try {
      // TODO: Fix callback. The this variable becomes the
      // action button when passing the "function pointer"
      this.service.delete(this.model);
      // TODO: Add better confirmation message
      alert("Product deleted")
      this.router.navigate(["/products"]);
    }
    catch (error: any) {
      let httpError = error as HttpErrorResponse;
      this.errorMessage = httpError.message;
      this.error = true;
    }
  }

  runCallback(method: string): void {
    if(method == ProductDeleteComponent.deleteCallback) {
      this.delete();
    }
  }
}
