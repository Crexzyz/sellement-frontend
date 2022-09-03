import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseFormField, FormValue } from '../models/form-fields/base-form-field';

/**
 * Converts BaseFormField models into Angular FormControls.
 */
@Injectable()
export class FormFieldControlService {
  constructor() { }

  /**
   * Converts FormField models into FormControls.
   * @param fields Concrete BaseFormField models to convert.
   * @returns An array with the converted Angular FormControls.
   */
  toFormGroup(fields: BaseFormField<FormValue>[]) {
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
