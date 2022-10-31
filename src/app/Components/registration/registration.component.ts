import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {last} from 'rxjs';
import { UsersService } from 'src/app/Services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  repeatpass:string='name';
  constructor(private http:HttpClient,private register:UsersService) { }
  baseApiUrl:string=environment.baseUrl;

  ngOnInit(): void {
  }
  isAcccountCreated:boolean=false;
  displayMsg:string='';
  registerForm=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    username:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10),]),
    email:new FormControl("",[Validators.required,Validators.email]),
    address:new FormControl("",[Validators.required]),
    postcode:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(6),Validators.maxLength(6)]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
    rpwd:new FormControl(""),
    
    
    }
    );
 registerSubmitted(){
   if(this.Pwd.value==this.Rpwd.value)
   {
     console.log(this.registerForm.valid);
     this.repeatpass='none'
     this.register.registerUser([
      this.registerForm.value.name!,
      this.registerForm.value.username!,
      this.registerForm.value.mobile!,
      this.registerForm.value.email!,
      this.registerForm.value.address!,
      this.registerForm.value.postcode!,
      this.registerForm.value.pwd!,
     ]).subscribe(res=>
      {
        if(res=="registered successfully"){
          this.displayMsg="Account created Sucessfully";
          this.isAcccountCreated=true;
        }
        else if(res=="Username already exist try another one"){
         this.displayMsg="Username already exist create new one";
         this.isAcccountCreated=false;
        }
        else{
          this.displayMsg="Something went wrong";
          this.isAcccountCreated=false;
        }
      })
   }
 }
    get Name():FormControl{
      return this.registerForm.get("name") as FormControl;
    }
    get Username():FormControl{
      return this.registerForm.get("username") as FormControl;
    }
    get Email():FormControl{
      return this.registerForm.get("email") as FormControl;
    }
    get Mobile():FormControl{
      return this.registerForm.get("mobile") as FormControl;
    }
    get Address():FormControl{
      return this.registerForm.get("address") as FormControl;
    }
    get PostCode():FormControl{
      return this.registerForm.get("postcode") as FormControl;
    }
    get Pwd():FormControl{
      return this.registerForm.get("pwd") as FormControl;
    }
    
    get Rpwd():FormControl{
    
      return this.registerForm.get("rpwd") as FormControl;
    
      }

    // register() {
    //   var body = {
    //     Name:this.registerForm.value.name,
    //     UserName: this.registerForm.value.username,
    //     Mobile:this.registerForm.value.mobile,
    //     Email: this.registerForm.value.email,
    //     Address: this.registerForm.value.address,
    //     PostCode:this.registerForm.value.postcode,
    //     Password: this.registerForm.value.pwd
    //   };
    //   return this.http.post(this.baseApiUrl + '/Registration/SignIn', body);
    // }
    }


    


