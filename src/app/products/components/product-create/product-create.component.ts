import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelEditor } from 'src/app/core/models/model-editor';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent extends ModelEditor<Product> {
  productForm: FormGroup = {} as FormGroup;

  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      // "id": [null],
      "name": [null, [Validators.required]],
      "description": [null, [Validators.required]],
      "stock": [null, [Validators.required]],
      "purchase_price": [null, [Validators.required]],
      "sell_price": [null, [Validators.required]],
    })
  }

  async submit(): Promise<boolean> {
    this.productForm.markAllAsTouched();

    if(!this.productForm.valid)
      return false;

    const productData = {
      "name": this.productForm.get("name")?.value,
      "description": this.productForm.get("description")?.value,
      "stock": this.productForm.get("stock")?.value,
      "purchase_price": this.productForm.get("purchase_price")?.value,
      "sell_price": this.productForm.get("sell_price")?.value,
    }

    const newProduct = new Product();
    newProduct.fromJson(productData)
    
    try {
      await this.modelService.create(newProduct);
    } catch (error: any) {
      console.log(error as HttpErrorResponse); 
      return false;
    }

    alert("Product created");
    this.productForm.reset();

    return true;
  }

}
