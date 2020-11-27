import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Injectable({
  providedIn: 'root'
})
export class JournalistGuard implements CanActivate {

  authenticatedUser$: Observable<IUser>;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(): boolean {
    let userCopy: IUser;
    this.authFacade.getCurrentUser().subscribe((user) => {
      userCopy = user
    });
    if (userCopy.roleID == 2) {
      return true;
    } else {
      this.router.navigate(['/app']);
      return false;
    }
  }
}
