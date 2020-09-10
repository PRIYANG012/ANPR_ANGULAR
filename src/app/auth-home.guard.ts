import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router, ) {}

  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn()) {   
        
        return true;      
        } 
             
        // navigate to login page as user is not authenticated      
     this.router.navigate(['/auth']);      
     return false; 
  }

  public isLoggedIn(): boolean {      
    let status = false;      
    if (localStorage.getItem('authIn') == "true") {      
       status = true;      
    }    
    else {      
       status = false;      
       }      
    return status;      
    }   
  
}
