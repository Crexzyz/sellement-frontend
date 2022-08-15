import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    // TODO: This should be done as soon as the fields are available to avoid
    // patchValue() problems due to the async call
    // Keeping the model in memory, instead of hiding the product's ID is
    // considered as the Angular way of forms
    const data = this.route.snapshot.data["data"]

    if(data.error !== null) {
      this.notFillableMessage = data.error;
      this.fillableForm = false;
      return
    }
    
    const product = new Product();
    product.fromJson(data.model)
    console.log(product);
    this.formFields = await this.modelService.form(product);
  }

  override async submitToBackend(product: Product) {
    return await this.modelService.update(product);
  }
}
