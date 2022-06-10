import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionableDetailedModelComponent } from 'src/app/core/components/actionable-detailed-model/actionable-detailed-model.component';
import { ActionButton } from 'src/app/core/models/action-button.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: '../../../core/components/actionable-detailed-model/actionable-detailed-model.component.html',
  styleUrls: [
    '../../../../styles.scss',
    '../../../core/components/actionable-detailed-model/actionable-detailed-model.component.scss'
  ]
})
export class ProductDetailsComponent extends ActionableDetailedModelComponent<Product>  {
  constructor(route: ActivatedRoute) {
    // Generic logic is in charge of initializing the Product model
    super(route, new Product());

    let updateButton = new ActionButton()
      .withRouterLink(`/products/update/${this.model.id}`)
      .withColor("primary")
      .withDisplayText("Update product")

    let deleteButton = new ActionButton()
      .withRouterLink(`/products/delete/${this.model.id}`)
      .withColor("warn")
      .withDisplayText("Delete product")

    this.buttons.push(updateButton, deleteButton);
  }
}
