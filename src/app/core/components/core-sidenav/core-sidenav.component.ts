import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { RouteInfo } from 'src/app/core/models/routes/route-info';
import { routes } from 'src/app/core/models/routes/routes';
import { CoreFacade } from 'src/app/core/state/facade';

@Component({
  selector: 'news-core-sidenav',
  templateUrl: './core-sidenav.component.html',
  styleUrls: ['./core-sidenav.component.scss']
})
export class CoreSidenavComponent implements OnInit {

  sideNavToggled$: Observable<boolean>;
  mobileQuery: MediaQueryList;
  userName: string = '';
  
  public menuItems: RouteInfo[];

  constructor(
    private coreFacade: CoreFacade,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,
    private authFace: AuthFacade,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
    this.menuItems = routes.filter(menuItem => menuItem);
    this.authFace.getCurrentUser().subscribe(user => this.userName = user.firstName + ' ' + user.lastName);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onBackdropClick(): void {
    this.coreFacade.toggleSideNav();
  }

}
