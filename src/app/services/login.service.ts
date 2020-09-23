import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  
  Login(Email,Password){
    var requestBody = {
      "Email": Email,
      "Password": Password
    }
    return this.http.post("/api/LoginUser",requestBody)
  }

}
