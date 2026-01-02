import { Injectable } from '@angular/core';
import {
     CanActivate,
     ActivatedRouteSnapshot,
     RouterStateSnapshot,
     Router
} from '@angular/router';

@Injectable({ providedIn: 'root' })

export class UserLoggedInGuard implements CanActivate {

     constructor(private router: Router) { }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          const token = localStorage.getItem('token');

          if (token) {
               return true;
          } else {
               alert('Login again!');
               this.router.navigate(['/reactive-form']);
          }

          return false;
     }
}
