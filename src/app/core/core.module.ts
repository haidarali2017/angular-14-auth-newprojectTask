import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import{NavbarComponent} from './components/navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
  
  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
