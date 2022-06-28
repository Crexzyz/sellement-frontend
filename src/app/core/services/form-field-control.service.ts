import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../models/form-fields/form-field';

@Injectable()
export class FormFieldControlService {
  constructor() { }

  toFormGroup(fields: FormField<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      const defaultValue = this.getDefaultValue(field.valueType);
      let control: FormControl;

      if(field.required) {
        control = new FormControl(field.value || defaultValue, Validators.required)
      } else {
        control = new FormControl(field.value || defaultValue)
      }

      group[field.name] = control
    });

    return new FormGroup(group);
  }

  private getDefaultValue(type: string): any {
    switch (type) {
      case "string":
        return "";
      case "number":
        return 0;
      default:
        return undefined;
    }
  }
}
