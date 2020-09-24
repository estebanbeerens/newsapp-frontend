import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CoreActions from 'src/app/core/state/actions';
import * as CoreSelectors from 'src/app/core/state/selectors';
import * as AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-core-toolbar',
  templateUrl: './core-toolbar.component.html',
  styleUrls: ['./core-toolbar.component.scss']
})
export class CoreToolbarComponent implements OnInit {
  sideNavToggled$: Observable<boolean>;

  constructor(
    private store: Store<AppState.State>
  ) { }

  ngOnInit(): void {
    this.sideNavToggled$ = this.store.select(CoreSelectors.sidenav.toggled);
  }

  toggle(): void {
    this.store.dispatch(CoreActions.sidenav.toggle.execute());
  }
}
