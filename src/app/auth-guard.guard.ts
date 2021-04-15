import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IdentityService } from './Service/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router, 
    private userSevive: IdentityService 
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userSevive.isLogged.pipe(
      tap((val)=> {
        if(!val){
          this.router.navigateByUrl('login');
        }
      })
    )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userSevive.isLogged.pipe(
      tap((val)=> {
        if(!val){
          this.router.navigateByUrl('login');
        }
      })
    )
  }
}
