import { NgModule } from '@angular/core';
import {LoginComponent} from './features/login/login.component';
import {SignupComponent } from './features/signup/signup.component';
import {AboutComponent} from './features/about/about.component';
import {HomeComponent} from './features/home/home.component'
import {Routes,RouterModule } from '@angular/router';

const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
 



];
@NgModule({
  declarations: [],
  imports: [  RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
