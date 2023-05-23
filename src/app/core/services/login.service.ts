import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private router: Router) { }

  public userName: any;
  setUserName(name: any) {
    this.userName = name;
  }
  getUserName(): any {
    return this.userName;
  }

  public userLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  public emitUserLoggedIn(userData: any) {
    this.userLoggedIn.emit(userData);
 
  }

  logout(): void {
    this.router.navigate(['/login']);
    window.location.reload();
  }

}
