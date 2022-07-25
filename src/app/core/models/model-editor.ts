import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Directive, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormComponent } from '../components/form/form.component';
import { Submitter } from "../interfaces/submitter";
import { ViewCallback } from '../interfaces/view-callback';
import { AbstractRestService } from "../services/abstract-rest.service";
import { ActionButton } from './action-button.model';
import { DataModel } from "./data-model.model";
import { BaseFormField } from './form-fields/base-form-field';

@Directive()
export abstract class ModelEditor<Model extends DataModel> implements OnInit, Submitter, ViewCallback {
  private static SUBMIT_CALLBACK: string = "submit";

  @ViewChild(FormComponent) protected formComponent!: FormComponent;

  submitText: string = "Submit";
  cancelText: string = "Cancel";
  formFields: BaseFormField<any>[] = [];
  buttons: ActionButton[] = [];

  fillableForm: boolean = true;
  notFillableMessage: string = "Error";

  protected successMessage: string = "Success";

  constructor(protected formBuilder: FormBuilder,
              protected modelService: AbstractRestService<Model>) { }

  abstract submitToBackend(object: Model): any;
  abstract createModelFromForm(): Model;
  onFormLoaded(): void {}

  runCallback(callbackName: string): void {
    if(callbackName === ModelEditor.SUBMIT_CALLBACK) {
      this.submit();
    }
  }

  ngOnInit(): void {
    this.getForm()
    let submitButton = new ActionButton()
      .withViewCallback(this, ModelEditor.SUBMIT_CALLBACK)
      .withColor("primary")
      .withDisplayText(this.submitText);

    let cancelButton = new ActionButton()
      .withRouterLink(`/products`)
      .withDisplayText(this.cancelText);

    this.buttons.push(submitButton, cancelButton);
  }
  
  async getForm(): Promise<void> {
    this.formFields = await this.modelService.form();
    this.onFormLoaded();
  }

  /**
   * Template method that submits data in a form to a concrete backend
   */
  async submit(): Promise<boolean> {
    this.formComponent.form.markAllAsTouched();

    if(!this.formComponent.form.valid) {
      return false;
    }
    
    const model: Model = this.createModelFromForm();
  
    try {
      await this.submitToBackend(model);
    } catch (error: any) {
      // TODO: Remove log and handle error
      console.log(error as HttpErrorResponse); 
      return false;
    }

    alert(this.successMessage);
    return true;
  }
}
