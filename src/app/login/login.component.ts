import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:UsersService) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),

  });
  isUserValid:boolean=false;
  get Username():FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Pwd():FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }
  loginSubmitted(){
    this.login.loginUser([this.loginForm.value.username!,
      this.loginForm.value.pwd!]).subscribe(res=>{
        if(res=="Login Failed"){
          this.isUserValid=false;
          alert("Login Unsuccessfull");
        }else{
          this.isUserValid=true;
          alert("Login Successfull");
        }
      });
    
  }

}
