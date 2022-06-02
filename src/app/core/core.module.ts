import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDetailsComponent } from './components/model-details/model-details.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ModelDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    ModelDetailsComponent
  ]
})
export class CoreModule { }
