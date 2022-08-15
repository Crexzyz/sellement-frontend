import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModelEditor } from 'src/app/core/models/model-editor';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent extends ModelEditor<Product> {
  override submitText: string = "Create product";
  override successMessage: string = "Product created";

  constructor(formBuilder: FormBuilder, service: ProductsService) {
    super(formBuilder, service);
  }
  
  override initModel(): Product {
    return new Product();
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

  override updateModelFromForm(): void {
    this.model!.fromJson(this.formComponent.form.getRawValue())
  }
}
