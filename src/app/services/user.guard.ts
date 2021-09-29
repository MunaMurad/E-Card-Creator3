import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(resolve => {
      this.afAuth.user.subscribe(user => {
        if (user) {
          console.log("##### User Guard: auth = true");
          resolve(true);
        } else {
          console.log("##### User Guard: auth = false");
          console.log('User is not logged in');
          //this.router.navigate(['/login']);
          this.router.navigate(['fire-signin'], {
            queryParams: {
              redirectUrl: state.url
            }
          });
          // route with redirect http://gnomeontherun.com/2017/03/02/guards-and-login-redirects-in-angular/
          //this.router.navigate(['/product-list'], { queryParams: { redirect: 3 }});
          resolve(false);
        }
      });
    });
  }
}