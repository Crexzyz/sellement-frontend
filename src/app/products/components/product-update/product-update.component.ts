import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResolvedModel } from 'src/app/core/interfaces/resolved-model';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductFormCommonComponent } from '../product-form-common/product-form-common.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-form-common/product-form-common.component.html',
  styleUrls: ['../product-form-common/product-form-common.component.scss']
})
export class ProductUpdateComponent extends ProductFormCommonComponent {
  override submitText: string = "Update product";
  override successMessage: string = "Product updated";

  constructor(formBuilder: FormBuilder, service: ProductsService, private route: ActivatedRoute) {
    super(formBuilder, service);
  }
  
  override async getForm(): Promise<void> {
    // TODO: Consider populating the form with an automatically resolved model
    // This should be done as soon as the fields are available to avoid
    // patchValue() problems due to the async call
    // Keeping the model in memory, instead of hiding the product's ID is
    // considered as the Angular way of forms
    let productId = this.route.snapshot.paramMap.get("id");
    if (productId !== null) {
      // The + symbol casts the string to a number.
      let id: number = +productId;
      let product: Product = new Product(id);
      this.formFields = await this.modelService.form(product);
    }
  }

  override async submitToBackend(product: Product) {
    return await this.modelService.update(product);
  }
}
