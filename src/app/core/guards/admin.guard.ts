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
  sub: Subscription;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(): boolean {
    this.sub = this.authFacade.getCurrentUser().subscribe((user) => {
      if (user.role.name === "Admin") {
        this.sub.unsubscribe();
        return true
      } else {
        this.router.navigate(['/app']);
        this.sub.unsubscribe();
        return false;
      }
    });
    return false
  }
}
