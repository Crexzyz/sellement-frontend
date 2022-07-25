import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductFormCommonComponent } from '../product-form-common/product-form-common.component';

@Component({
  selector: 'app-product-create',
  templateUrl: '../product-form-common/product-form-common.component.html',
  styleUrls: ['../product-form-common/product-form-common.component.scss']
})
export class ProductCreateComponent extends ProductFormCommonComponent {
  override submitText: string = "Create product";
  override successMessage: string = "Product created";

  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }

  override async submitToBackend(object: Product) {
    return await this.modelService.create(object);
  }

  override async submit(): Promise<boolean> {
    const validRequest = await super.submit();

    if(validRequest) {
      this.formComponent.form.reset();
    }

    return validRequest;
  }
}
