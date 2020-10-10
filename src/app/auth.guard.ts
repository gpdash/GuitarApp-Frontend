import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router:Router){}
  canActivate():boolean{
    if(this.authService.loggedIn())
    return true;
    else
    this.router.navigate(['/login'])
  }
  
}
