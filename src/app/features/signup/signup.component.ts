import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl('')
      // other form controls
    });
    console.log(22);
   }

  ngOnInit(): void {
  }

}
