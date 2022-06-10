import { Directive, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModelEditor } from 'src/app/core/models/model-editor';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Directive()
export abstract class ProductFormCommonComponent extends ModelEditor<Product> implements OnInit {
  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }
  
  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      "id": [null],
      "name": [null, [Validators.required]],
      "description": [null, [Validators.required]],
      "stock": [null, [Validators.required]],
      "purchase_price": [null, [Validators.required]],
      "sell_price": [null, [Validators.required]],
    })
  }

  createModelFromForm(): Product {
    const productData = {
      "id": this.modelForm.get("id")?.value,
      "name": this.modelForm.get("name")?.value,
      "description": this.modelForm.get("description")?.value,
      "stock": this.modelForm.get("stock")?.value,
      "purchase_price": this.modelForm.get("purchase_price")?.value,
      "sell_price": this.modelForm.get("sell_price")?.value,
    }

    const newProduct: Product = new Product();
    newProduct.fromJson(productData)
    return newProduct;
  }
}
