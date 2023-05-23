import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: any;
  constructor(private LoginService:LoginService) { 
   
  }
  ngOnInit(): void {
    this.LoginService.userLoggedIn.subscribe((userData: any) => {
      this.userName = userData;
    });
  }

  logout():void { 
    this.LoginService.logout();
  }

}
