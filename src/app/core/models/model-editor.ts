import { HttpErrorResponse } from '@angular/common/http';
import { Directive, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormComponent } from '../components/form/form.component';
import { Submitter } from "../interfaces/submitter";
import { ViewCallback } from '../interfaces/view-callback';
import { BaseRestService } from "../services/base-rest.service";
import { ActionButton } from './action-button.model';
import { DataModel } from "./data-model.model";
import { BaseFormField } from './form-fields/base-form-field';

@Directive()
export abstract class ModelEditor<Model extends DataModel> implements OnInit, Submitter, ViewCallback {
  private static SUBMIT_CALLBACK: string = "submit";

  @ViewChild(FormComponent)
  protected formComponent!: FormComponent;

  protected successMessage: string = "Success";

  protected model: Model | null = null;

  submitText: string = "Submit";
  cancelText: string = "Cancel";

  formFields: BaseFormField<any>[] = [];
  buttons: ActionButton[] = [];

  fillableForm: boolean = true;
  notFillableMessage: string = "Error";


  constructor(
    protected formBuilder: FormBuilder,
    protected modelService: BaseRestService<Model>,
  ) {}

  /**
   * Initializes the model for creating or updating an existing instance.
   * @returns The initialized model.
   */
  abstract initModel(): Model;
  
  /**
   * Creates or updates the component's model with the form's data.
   */
  abstract updateModelFromForm(): void;

  /**
   * Submits input data to the backend through the model's service.
   * @param model The model data to submit.
   */
  abstract submitToBackend(model: Model): any;

  runCallback(callbackName: string): void {
    if(callbackName === ModelEditor.SUBMIT_CALLBACK) {
      this.submit();
    }
  }

  ngOnInit(): void {
    this.model = this.initModel()
    this.getForm()
    let submitButton = new ActionButton()
      .withViewCallback(this, ModelEditor.SUBMIT_CALLBACK)
      .withColor("primary")
      .withDisplayText(this.submitText);

    let cancelButton = new ActionButton()
      .withRouterLink("..")
      .withDisplayText(this.cancelText);

    this.buttons.push(submitButton, cancelButton);
  }
  
  /**
   * Fetches the form's data from the model's service.
   */
  async getForm(): Promise<void> {
    // Get the empty form by default
    this.formFields = await this.modelService.form();
  }

  /**
   * Template method that submits data in a form to a concrete backend.
   */
  async submit(): Promise<boolean> {
    this.formComponent.form.markAllAsTouched();

    if(!this.formComponent.form.valid) {
      return false;
    }
    
    this.updateModelFromForm();
  
    try {
      await this.submitToBackend(this.model!);
    } catch (error: any) {
      // TODO: Remove log and handle error visually
      console.log(error as HttpErrorResponse); 
      return false;
    }

    alert(this.successMessage);
    this.formComponent.form.reset();
    return true;
  }
}
