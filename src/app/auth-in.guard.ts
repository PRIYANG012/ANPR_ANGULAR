import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service'

import { Router, ActivatedRoute } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthINGuard implements CanActivate {
  
  constructor(private Authguardservice: AuthenticationService, 
    private route: ActivatedRoute,
    private router: Router) {}  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('authIn') == "true"){
        this.router.navigate(['/dashboard']); 
        return false;
      }
     
    return true;
  }
  
}
