import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { RouteInfo } from 'src/app/core/models/routes/route-info';
import { routes } from 'src/app/core/models/routes/routes';
import { CoreFacade } from 'src/app/core/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-core-sidenav',
  templateUrl: './core-sidenav.component.html',
  styleUrls: ['./core-sidenav.component.scss']
})
export class CoreSidenavComponent implements OnInit {

  authenticatedUser$: Observable<IUser>;
  sideNavToggled$: Observable<boolean>;
  mobileQuery: MediaQueryList;
  userName: string = '';
  
  public menuItems: RouteInfo[];

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
    this.menuItems = routes.filter(menuItem => menuItem);
    this.authenticatedUser$ = this.authFacade.getCurrentUser();
    this.userName = this.getUsername();
  }

  getUsername(): string {
    this.authFacade.getCurrentUser().subscribe((user) => {
      return user.firstName + ' ' + user.lastName;
    });
    return 'Niet ingelogd'
  }

  onBackdropClick(): void {
    this.coreFacade.toggleSideNav();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
