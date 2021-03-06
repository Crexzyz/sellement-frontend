import { Component, OnInit } from '@angular/core';
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
export class ProductUpdateComponent extends ProductFormCommonComponent implements OnInit {
  constructor(formBuilder: FormBuilder, service: ProductsService, private route: ActivatedRoute) {
    super(formBuilder, service);
  }

  override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.submitText = "Update product";
    this.successMessage = "Product updated";

    const resolvedData: ResolvedModel<Product> = this.route.snapshot.data['data'];
    if (resolvedData.error != null) {
      this.notFillableMessage = resolvedData.error;
      this.fillableForm = false;
      return;
    }

    const product: Product = new Product();
    product.fromJson(resolvedData.model);

    this.modelForm.patchValue({
      "id": product.id,
      "name": product.name,
      "description": product.description,
      "stock": product.stock,
      "purchase_price": product.purchasePrice,
      "sell_price": product.sellPrice
    });
  }

  override async submitToBackend(object: Product) {
    return await this.modelService.update(object);
  }
}
