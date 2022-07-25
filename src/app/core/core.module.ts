import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelDetailsComponent } from './components/model-details/model-details.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonArrayComponent } from './components/button-array/button-array.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './components/form/form.component';
import { FormFieldComponent } from './components/form-fields/form-field/form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldComponent } from './components/form-fields/text-field/text-field.component';
import { TextareaFieldComponent } from './components/form-fields/textarea-field/textarea-field.component';
import { NumberFieldComponent } from './components/form-fields/number-field/number-field.component';
import { CurrencyFieldComponent } from './components/form-fields/currency-field/currency-field.component';

@NgModule({
  declarations: [
    ModelDetailsComponent,
    ButtonArrayComponent,
    FormComponent,
    TextFieldComponent,
    TextareaFieldComponent,
    NumberFieldComponent,
    CurrencyFieldComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ModelDetailsComponent,
    ButtonArrayComponent,
    FormComponent,
  ]
})
export class CoreModule { }
