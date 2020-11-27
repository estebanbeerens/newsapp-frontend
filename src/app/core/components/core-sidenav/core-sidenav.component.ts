import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { RouteInfo } from 'src/app/core/models/routes/route-info';
import { adminRoutes } from 'src/app/core/models/routes/admin-routes';
import { CoreFacade } from 'src/app/core/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';
import { journalistRoutes } from 'src/app/core/models/routes/journalist-routes';

@Component({
  selector: 'news-core-sidenav',
  templateUrl: './core-sidenav.component.html',
  styleUrls: ['./core-sidenav.component.scss']
})
export class CoreSidenavComponent implements OnInit {

  authenticatedUser$: Observable<IUser>;
  sideNavToggled$: Observable<boolean>;
  mobileQuery: MediaQueryList;
  
  menuItems: RouteInfo[];

  constructor(
    private coreFacade: CoreFacade,
    private authFacade: AuthFacade,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
    this.authenticatedUser$ = this.authFacade.getCurrentUser();
    this.getUsername();
  }

  getUsername(): void {
    this.authFacade.getCurrentUser().subscribe((user) => {
      if (user.roleID == 2) {
        this.menuItems = journalistRoutes.filter(menuItem => menuItem);
      } else {
        this.menuItems = adminRoutes.filter(menuItem => menuItem);
      }
    });
  }

  onBackdropClick(): void {
    this.coreFacade.toggleSideNav();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
