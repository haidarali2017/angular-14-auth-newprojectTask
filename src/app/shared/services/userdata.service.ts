import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private signUpData: any;
  constructor(private http: HttpClient ) { }


  saveUsers(signUpData:any): void
  {
    this.signUpData = signUpData;

  }
  public getSignUpFormData(): any {
    return this.signUpData;
  }

 


}
