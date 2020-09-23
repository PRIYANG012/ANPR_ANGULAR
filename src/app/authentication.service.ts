import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  logout() :void {    
    localStorage.setItem('authIn','false');    
    localStorage.setItem('currentToken',null);
    
    }   
}
