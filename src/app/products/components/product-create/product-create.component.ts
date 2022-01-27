import { Component } from '@angular/core';
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
  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.submitText = "Create product";
    this.successMessage = "Product created";
  }

  override async submitToBackend(object: Product) {
    return await this.modelService.create(object);
  }
}
