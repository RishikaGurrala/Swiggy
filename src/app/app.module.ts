import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ProductComponent } from './Components/product/product.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './Services/users.service';
import { ProductService } from './Services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
