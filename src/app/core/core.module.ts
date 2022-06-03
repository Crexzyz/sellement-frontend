import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDetailsComponent } from './components/model-details/model-details.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonArrayComponent } from './components/button-array/button-array.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ModelDetailsComponent,
    ButtonArrayComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [
    ModelDetailsComponent,
    ButtonArrayComponent,
  ]
})
export class CoreModule { }
