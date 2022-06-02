import { Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolvedModel } from '../../interfaces/resolved-model';
import { ActionButton } from '../../models/action-button.model';
import { DataModel } from '../../models/data-model.model';

@Directive()
export abstract class ActionableDetailedModelComponent<Model extends DataModel> {
  error: boolean = false;
  errorMessage: string = "";
  helpMessage: string = "";
  buttons: Array<ActionButton> = Array<ActionButton>();

  constructor(protected route: ActivatedRoute, public model: Model) {
    const data: ResolvedModel<Model> = this.route.snapshot.data['data'];
    this.error = data.error != null;
    if(this.error) {
      this.errorMessage = data.error;
      return;
    }
    
    this.model.fromJson(data.model);
  }
}
