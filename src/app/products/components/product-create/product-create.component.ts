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
export class ProductCreateComponent extends ProductFormCommonComponent implements OnInit {
  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.submitText = "Create product";
    this.successMessage = "Product created";

    const idField = this.modelForm.get('id');
    if(idField) {
      idField.setValue(0);
    }
  }

  override async submitToBackend(object: Product) {
    return await this.modelService.create(object);
  }

  override async submit(): Promise<boolean> {
    const validRequest = await super.submit();

    if(validRequest)
      this.modelForm.reset();

    return validRequest;
  }
}
