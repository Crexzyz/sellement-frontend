import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../users/guards/login.guard';

const routes: Routes = [
  {
    path: 'products', canActivate: [LoginGuard],
    children: [
      {path: '', component: ProductListComponent, pathMatch: 'full'},
      {path: 'create', component: ProductCreateComponent}
    ]
  }
]


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
