import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginGuard } from '../users/guards/login.guard';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

const routes: Routes = [
  {
    path: 'products', canActivate: [LoginGuard],
    children: [
      {path: '', component: ProductListComponent, pathMatch: 'full'},
      {path: 'create', component: ProductCreateComponent},
      {path: 'update/:id', component: ProductUpdateComponent},

    ]
  }
]


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
