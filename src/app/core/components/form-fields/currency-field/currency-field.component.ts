import { Component, OnInit } from '@angular/core';
import { CurrencyField } from 'src/app/core/models/form-fields/currency-field';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-currency-field',
  templateUrl: './currency-field.component.html',
})
export class CurrencyFieldComponent extends FormFieldComponent implements OnInit {
  field!: CurrencyField;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if(!(this.baseField instanceof CurrencyField)) {
      throw Error(`Invalid type in ${CurrencyField.name}: ${typeof this.baseField}`);
    }

    this.field = this.baseField as CurrencyField;
  }
}
