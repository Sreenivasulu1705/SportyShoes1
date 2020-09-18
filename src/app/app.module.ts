import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UsersService } from './users.service';
import { ProductService } from './product.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CreateusersComponent } from './createusers/createusers.component'
import { CreateproductService } from './createproduct.service';
import { CreateusersService } from './createusers.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticateService } from './authenticate.service';



@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    ProductlistComponent,
    CreateproductComponent,
    CreateusersComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,ProductService,CreateproductService,CreateusersService,AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
