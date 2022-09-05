import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormField } from 'src/app/core/models/form-fields/base-form-field';

@Directive()
export abstract class FormFieldComponent {
  @Input() baseField!: BaseFormField<any>;
  @Input() form!: FormGroup;
  
  get isValid(): boolean {
    return this.form.controls[this.baseField.name].valid
  }
}
