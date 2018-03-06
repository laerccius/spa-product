import { NgModule }             from '@angular/core';
import { RouterModule, Routes ,CanActivate } from '@angular/router';
 
import { ProductsComponent }   from './products/products.component';
import {LoginComponent} from './login/login.component'

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent
  
  },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}