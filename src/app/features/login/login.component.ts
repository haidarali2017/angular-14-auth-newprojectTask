import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import {UserdataService} from '../../shared/services/userdata.service';
import {LoginService} from '../../core/services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveFormLogin: FormGroup;
  signUpFormData: any;
  constructor(private userdataService:UserdataService,private router: Router,private loginDataService:LoginService) { 

    this.signUpFormData = this.userdataService.getSignUpFormData();
    // console.log('login',this.signUpFormData);
    this.reactiveFormLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmitLogin()
  { 
     if (this.reactiveFormLogin.invalid)
     {
       // Handle invalid form
       return;
     }else{
       const loginData = this.reactiveFormLogin.value;
       const signUpdata =this.signUpFormData;
      if (
        signUpdata.username === loginData.username &&
        signUpdata.password === loginData.password
      ){
        // this.logindataService.setUserName(signUpdata.username);
        this.loginDataService.emitUserLoggedIn(loginData.username);
        this.router.navigate(['/']);
        alert('Login successful!');
      } else {
       
        alert('Login failed!');
      }


     } 
    
  
  
   }

}
