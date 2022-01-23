import { Directive, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Submitter } from "../interfaces/submitter";
import { AbstractRestService } from "../services/abstract-rest.service";
import { DataModel } from "./data-model.model";

@Directive()
export abstract class ModelEditor<Model extends DataModel> implements OnInit, Submitter {
    modelForm: FormGroup = {} as FormGroup;

    constructor(protected formBuilder: FormBuilder, protected modelService: AbstractRestService<Model>) {}

    abstract ngOnInit(): void;
    abstract submit(): Promise<boolean>;
}