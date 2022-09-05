import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from '../users/guards/login.guard';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CoreModule } from '../core/core.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoryCreateComponent } from './components/category-create/category-create.component';


const routes: Routes = [
  {
    path: "categories", canActivate: [LoginGuard],
    children: [
      { path: "", component: CategoryListComponent, pathMatch: "full"},
      { path: "create", component: CategoryCreateComponent}
    ]
  }
]

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
  ]
})
export class CategoriesModule { }
