import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon'

import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginGuard } from '../users/guards/login.guard';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { SingleProductResolver } from './services/single-product.resolver';

const routes: Routes = [
  {
    path: 'products', canActivate: [LoginGuard],
    children: [
      { path: '', component: ProductListComponent, pathMatch: 'full' },
      { path: 'create', component: ProductCreateComponent },
      {
        path: 'update/:id', component: ProductUpdateComponent, resolve: {
          data: SingleProductResolver
        }
      },

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
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
