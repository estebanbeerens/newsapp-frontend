import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  authenticatedUser$: Observable<IUser>;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(): boolean {
    let userCopy: IUser;
    this.authFacade.getCurrentUser().subscribe((user) => {
      userCopy = user
    });
    if (userCopy.role.name === "Admin") {
      return true;
    } else {
      this.router.navigate(['/app']);
      return false;
    }
  }
}
