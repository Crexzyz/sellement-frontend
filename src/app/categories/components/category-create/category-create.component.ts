import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModelEditor } from 'src/app/core/models/model-editor';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
})
export class CategoryCreateComponent extends ModelEditor<Category> {
  override submitText: string = "Create category";
  override successMessage: string = "Category created";

  constructor(formBuilder: FormBuilder, service: CategoriesService) {
    super(formBuilder, service);
  }
  
  override initModel(): Category {
    return new Category()
  }

  override updateModelFromForm(): void {
    this.model!.fromJson(this.formComponent.form.getRawValue())
  }

  override async submitToBackend(category: Category) {
    return await this.modelService.create(category);
  }
}
