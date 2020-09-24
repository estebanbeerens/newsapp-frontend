import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouteInfo, ROUTES } from 'src/app/core/routing/route-info';
import { environment } from 'src/environments/environment';

import * as CoreActions from 'src/app/core/state/actions';
import * as CoreSelectors from 'src/app/core/state/selectors';
import * as AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-core-sidenav',
  templateUrl: './core-sidenav.component.html',
  styleUrls: ['./core-sidenav.component.scss']
})
export class CoreSidenavComponent implements OnInit, OnDestroy {
  
  sideNavToggled$: Observable<boolean>;
  mobileQuery: MediaQueryList;
  
  simplebarOptions = environment.simpleBarOptions;
  public menuItems: RouteInfo[];

  constructor(
    private store: Store<AppState.State>,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit(): void {
    this.sideNavToggled$ = this.store.select(CoreSelectors.sidenav.toggled);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onBackdropClick(): void {
    this.store.dispatch(CoreActions.sidenav.toggle.execute());
  }

}
