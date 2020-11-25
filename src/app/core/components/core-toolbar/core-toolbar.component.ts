import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreFacade } from 'src/app/core/state/facade';
@Component({
  selector: 'news-core-toolbar',
  templateUrl: './core-toolbar.component.html',
  styleUrls: ['./core-toolbar.component.scss']
})
export class CoreToolbarComponent implements OnInit {

  sideNavToggled$: Observable<boolean>;

  constructor(
    private coreFacade: CoreFacade
  ) { }

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
  }

  toggle(): void {
    this.coreFacade.toggleSideNav();
  }
  
}
