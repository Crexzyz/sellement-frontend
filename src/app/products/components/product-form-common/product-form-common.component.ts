import { Directive, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModelEditor } from 'src/app/core/models/model-editor';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Directive()
export abstract class ProductFormCommonComponent extends ModelEditor<Product> {
  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }

  createModelFromForm(): Product {
    const newProduct: Product = new Product();
    newProduct.fromJson(this.formComponent.form.getRawValue())
    return newProduct;
  }
}
