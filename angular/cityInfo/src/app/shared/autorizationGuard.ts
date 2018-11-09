import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {


  constructor(private sessionService: SessionService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.isAdmin(next.data.onlyAdmin, state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAdmin(childRoute.data.onlyAdmin, state.url);
  }

  isAdmin(adminRequired: boolean, attemptedUrl: string) {
    if (adminRequired) {
      const isValid = this.sessionService.isAdmin();

      if (!isValid) {
        const navigationExtras: NavigationExtras = {
          queryParams: { 'message': `${attemptedUrl} requires admin rights` }
        };

        this.router.navigate(['/error'], navigationExtras);
      }

      return isValid;
    } else {
      return true;
    }
  }

}
