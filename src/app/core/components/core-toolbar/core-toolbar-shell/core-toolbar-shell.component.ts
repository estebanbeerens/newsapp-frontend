import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { CoreFacade } from 'src/app/core/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-core-toolbar-shell',
  templateUrl: './core-toolbar-shell.component.html',
  styleUrls: ['./core-toolbar-shell.component.scss']
})
export class CoreToolbarShellComponent implements OnInit {
  
  authenticatedUser$: Observable<IUser>;
  sideNavToggled$: Observable<boolean>;
  isAdmin: boolean = false;

  constructor(
    private coreFacade: CoreFacade,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.authenticatedUser$ = this.authFacade.getCurrentUser();
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
  }

  toggle(): void {
    this.coreFacade.toggleSideNav();
  }

  logout(): void {
    this.authFacade.logout();
    this.coreFacade.setSideNavFalse();
  }

}
