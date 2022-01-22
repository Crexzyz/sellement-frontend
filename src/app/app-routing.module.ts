import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './users/components/login/login.component';
import { LoginGuard } from './users/guards/login.guard';
import { LoginResolver } from './users/guards/login.resolver';
import { ProductListComponent } from './products/components/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, resolve: [LoginResolver]},
  {path: 'products', component: ProductListComponent, canActivate: [LoginGuard]},
  // TODO: Common not found page
  // {path: '**', component: ErrorComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
