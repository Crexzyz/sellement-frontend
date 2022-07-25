import { Component, OnInit } from '@angular/core';
import { TextareaField } from 'src/app/core/models/form-fields/textarea-field';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
})
export class TextareaFieldComponent extends FormFieldComponent implements OnInit {
  field!: TextareaField;
  constructor() {
    super();
  }

  ngOnInit(): void {
    if(!(this.baseField instanceof TextareaField)) {
      throw Error(`Invalid type in ${TextareaField.name}: ${typeof this.baseField}`);
    }

    this.field = this.baseField as TextareaField;
  }
}
