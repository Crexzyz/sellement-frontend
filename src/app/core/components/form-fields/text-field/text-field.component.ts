import { Component, OnInit } from '@angular/core';
import { TextField } from 'src/app/core/models/form-fields/text-field';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent extends FormFieldComponent implements OnInit {
  field!: TextField;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if(!(this.baseField instanceof TextField)) {
      throw Error(`Invalid type in ${TextField.name}: ${typeof this.baseField}`);
    }

    this.field = this.baseField as TextField;
  }
}
