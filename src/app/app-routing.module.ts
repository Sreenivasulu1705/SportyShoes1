import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';




const routes: Routes = [

  {path:"createusers",component:CreateusersComponent},
  {path:"userslist",component:UserslistComponent},
  {path:"createproduct",component:CreateproductComponent},
  {path:"productlist",component:ProductlistComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
