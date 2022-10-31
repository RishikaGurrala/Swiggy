import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // formModel = this.fb.group({
  //   UserName: ['', Validators.required],
  //   Email: ['', Validators.email],
  //   FullName: [''],
  //   Passwords: this.fb.group({
  //     Password: ['', [Validators.required, Validators.minLength(4)]],
  //     ConfirmPassword: ['', Validators.required]
  //   }, { validator: this.comparePasswords })
  constructor(private http:HttpClient) { }
  baseApiUrl:string=environment.baseUrl;
  registerUser(user:Array<String>){
    return this.http.post(
      this.baseApiUrl+'Registration/SignUp',
      {
        Name:user[0],
        Username:user[1],
        Mobile:user[2],
        Email:user[3],
        Address:user[4],
        PostCode:user[5],
        Password:user[6]
      },{
        responseType:"text",
      }
    );
  }
    loginUser(loginInfo: Array<String>){
      return this.http.post(this.baseApiUrl+'/Registration/SignIn',
      {
        UserName:loginInfo[0],
        Password:loginInfo[1]
      },
      {
        responseType:"text",
      }
      );
    }
      
      
    
  }


  
  





