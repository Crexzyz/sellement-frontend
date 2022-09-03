import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModelEditor } from 'src/app/core/models/model-editor';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
})
export class ProductUpdateComponent extends ModelEditor<Product> {
  override submitText: string = "Update product";
  override successMessage: string = "Product updated";
  
  constructor(formBuilder: FormBuilder, service: ProductsService, private route: ActivatedRoute) {
    super(formBuilder, service);
  }
  
  override initModel(): Product {
    const data = this.route.snapshot.data["data"]
    
    if(data.error !== null) {
      this.notFillableMessage = data.error;
      this.fillableForm = false;
      // TODO: Throw an error without creating a product
      return new Product();
    }

    return data.model as Product
  }

  override async getForm(): Promise<void> {
    // This should be done as soon as the fields are available to avoid
    // patchValue() problems due to the async call
    this.formFields = await this.modelService.form(this.model!);
  }
  
  override async submitToBackend(product: Product) {
    return await this.modelService.update(product);
  }

  override updateModelFromForm(): void {
    let data = this.formComponent.form.getRawValue();
    // Add the id again to prevent resetting the model's id
    // TODO: Add data updater function that does not reset non-present values
    // (could be added generally to the model class)
    data.id = this.model!.id;
    this.model!.fromJson(data);
  }
}
