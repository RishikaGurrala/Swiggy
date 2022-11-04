import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
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
  currentUser:BehaviorSubject<any>=new BehaviorSubject(null);
  jwtHelperService=new JwtHelperService();
  registerUser(user:Array<String>){
    return this.http.post(
      this.baseApiUrl+'/Registration/SignUp',
      {
        Name:user[0],
        UserName:user[1],
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
      
    setToken(token:string){
      localStorage.setItem("access_token",token);
      this.loadCurrentUser();
    } 
   
    loadCurrentUser(){
      const token=localStorage.getItem("access_token");
      const userInfo=token != null? this.jwtHelperService.decodeToken(token): null;
      const data=userInfo? {
        id:userInfo.id,
        name:userInfo.name,
        username:userInfo.username,
        mobile:userInfo.mobile,
        email:userInfo.email,
        address:userInfo.address,
        postcode:userInfo.postcode,
      }:null;
      this.currentUser.next(data);
    }

    
  }


  
  





