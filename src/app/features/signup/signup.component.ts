import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import {UserdataService} from '../../shared/services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myFormSignup: FormGroup;
  constructor(private userdataService:UserdataService,private router: Router) {
    
    this.myFormSignup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
    });
    
   }

  ngOnInit(): void {
  }
  onSubmitSignup()
   { 
      if (this.myFormSignup.invalid)
      {
        // Handle invalid form
        return;
      }else{
        const signUpData = this.myFormSignup.value;
        this.userdataService.saveUsers(signUpData);
        this.router.navigate(['/login']);
        alert('Save successful! Signup ');
      } 
     
   
   
    }
 
}