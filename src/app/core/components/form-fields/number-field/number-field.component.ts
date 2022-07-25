import { Component, Input, OnInit } from '@angular/core';
import { NumberField } from 'src/app/core/models/form-fields/number-field';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
})
export class NumberFieldComponent extends FormFieldComponent implements OnInit {
  field!: NumberField;
  constructor() {
    super();
  }

  ngOnInit(): void {
    if(!(this.baseField instanceof NumberField)) {
      throw Error(`Invalid type in ${NumberField.name}: ${typeof this.baseField}`);
    }

    this.field = this.baseField as NumberField;
  }
}
