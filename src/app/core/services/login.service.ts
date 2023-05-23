import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public userName: any;
  setUserName(name: any) {
    this.userName = name;
    // console.log('login service',name);
  }
  getUserName(): any {
    return this.userName;
  }

  public userLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  public emitUserLoggedIn(userData: any) {
    this.userLoggedIn.emit(userData);
 
  }

}
