import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CoreModule } from '../core/core.module';
import { LoginGuard } from '../users/guards/login.guard';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
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
      {
        path: 'details/:id', component: ProductDetailsComponent, resolve: {
          data: SingleProductResolver
        }
      },
      {
        path: 'delete/:id', component: ProductDeleteComponent, resolve: {
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
    ProductDetailsComponent,
    ProductDeleteComponent,
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
    MatTooltipModule,
    FlexLayoutModule,
    MatDividerModule,
    CoreModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
