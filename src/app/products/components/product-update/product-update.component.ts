import { Component, OnInit } from '@angular/core';
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
  constructor(formBuilder: FormBuilder, service: ProductsService, private route: ActivatedRoute) {
    super(formBuilder, service);
  }

  override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.submitText = "Update product";
    this.successMessage = "Product updated";
    const stringId = this.route.snapshot.paramMap.get('id');

    if(stringId == null)
      return

    let id: number = parseInt(stringId);

    if(id == NaN)
      return;

    const product: Product = new Product(id=id);
    const data = await this.modelService.get(product)
    product.fromJson(data);

    this.modelForm.controls['id'].setValue(product.id);
    this.modelForm.controls['name'].setValue(product.name);
    this.modelForm.controls['description'].setValue(product.description);
    this.modelForm.controls['stock'].setValue(product.stock);
    this.modelForm.controls['purchase_price'].setValue(product.purchasePrice);
    this.modelForm.controls['sell_price'].setValue(product.sellPrice);
  }

  override async submitToBackend(object: Product) {
    return await this.modelService.update(object);
  }
}
