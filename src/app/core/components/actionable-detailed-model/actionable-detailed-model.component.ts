import { ActivatedRoute } from '@angular/router';
import { ActionButton } from '../../models/action-button.model';
import { DataModel } from '../../models/data-model.model';

export abstract class ActionableDetailedModelComponent<Model extends DataModel> {
  error: boolean = false;
  errorMessage: string = "";
  helpMessage: string = "";
  buttons: Array<ActionButton> = Array<ActionButton>();

  constructor(protected route: ActivatedRoute, public model: Model) {
    const data = this.route.snapshot.data['data'];
    this.error = data.error != null;

    if(this.error) {
      this.errorMessage = data.error;
      return;
    }

    this.model = data.model as Model
  }
}
