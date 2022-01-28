import { Component } from '@angular/core';
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
