import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActionButton } from '../../models/action-button.model';
import { BaseFormField } from '../../models/form-fields/base-form-field';
import { FormFieldControlService } from '../../services/form-field-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ FormFieldControlService ]
})
export class FormComponent implements OnChanges {
  @Input() fields: BaseFormField<any>[] = [];
  @Input() buttons: ActionButton[] = [];

  form: FormGroup = new FormGroup({});

  constructor(private controlService: FormFieldControlService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    const fields = changes["fields"].currentValue as BaseFormField<any>[];
    this.fields = fields.filter(field => !field.hidden);
    this.form = this.controlService.toFormGroup(this.fields as BaseFormField<any>[]);
  }
}
