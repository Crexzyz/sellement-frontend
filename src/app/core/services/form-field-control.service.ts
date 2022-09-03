import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseFormField, FormField } from '../models/form-fields/base-form-field';

@Injectable()
export class FormFieldControlService {
  constructor() { }

  toFormGroup(fields: BaseFormField<FormField>[]) {
    const group: {[key: string]: FormControl} = {};

    fields.forEach(field => {
      let validators: ValidatorFn[] = []

      if(field.required) {
        validators.push(Validators.required)
      }

      group[field.name] = new FormControl(field.value || field.defaultValue, validators)
    });

    return new FormGroup(group);
  }
}
