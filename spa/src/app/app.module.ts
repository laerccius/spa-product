import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import {ProductService} from './product.service';
import { HttpModule }    from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthenticationService } from './authentication.service';

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService,AuthService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
