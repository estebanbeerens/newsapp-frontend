import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authenticatedUser$: Observable<IUser>;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    }
}
