import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { CoreFacade } from 'src/app/core/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';
@Component({
  selector: 'news-core-toolbar',
  templateUrl: './core-toolbar.component.html',
  styleUrls: ['./core-toolbar.component.scss']
})
export class CoreToolbarComponent implements OnInit {

  sideNavToggled$: Observable<boolean>;
  isAdmin: boolean = false;

  constructor(
    private coreFacade: CoreFacade,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
    this.isAdmin = this.checkIsAdmin();
  }

  checkIsAdmin(): boolean {
    let userCopy: IUser;
    this.authFacade.getCurrentUser().subscribe((user) => {
      userCopy = user
    });
    if (userCopy.role.name === "Admin") {
      return true;
    } else {
      return false;
    }
  }

  toggle(): void {
    this.coreFacade.toggleSideNav();
  }
  
}
