import { HttpErrorResponse } from '@angular/common/http';
import { Directive, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Submitter } from "../interfaces/submitter";
import { AbstractRestService } from "../services/abstract-rest.service";
import { DataModel } from "./data-model.model";

@Directive()
export abstract class ModelEditor<Model extends DataModel> implements OnInit, Submitter {
    submitText: string = "Submit";
    modelForm: FormGroup = {} as FormGroup;
    fillableForm: boolean = true;
    notFillableMessage: string = "Error";

    protected successMessage: string = "Success";

    constructor(protected formBuilder: FormBuilder,
                protected modelService: AbstractRestService<Model>) {}

    abstract ngOnInit(): void;
    abstract submitToBackend(object: Model): any;
    abstract createModelFromForm(): Model;

    async submit(): Promise<boolean> {
        this.modelForm.markAllAsTouched();
    
        if(!this.modelForm.valid) {
          return false;
        }
        
        const model: Model = this.createModelFromForm();
      
        try {
          await this.submitToBackend(model);
        } catch (error: any) {
          console.log(error as HttpErrorResponse); 
          return false;
        }
    
        alert(this.successMessage);
        return true;
    }
}
