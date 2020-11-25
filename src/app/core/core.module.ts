import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreFooterComponent } from './components/core-footer/core-footer.component';
import { CoreToolbarComponent } from './components/core-toolbar/core-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { CoreContentComponent } from './components/content/content.component';
import { CoreSidenavComponent } from './components/core-sidenav/core-sidenav.component';
import { StoreModule } from '@ngrx/store';
import { coreReducer } from 'src/app/core/state/reducer';
import { authReducer } from 'src/app/auth/state/reducer';


@NgModule({
  declarations: [CoreFooterComponent, CoreToolbarComponent, CoreContentComponent, CoreSidenavComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MatSidenavModule,
    StoreModule.forFeature('core', coreReducer),
    StoreModule.forFeature('auth', authReducer)
  ],
  exports: [
    CoreFooterComponent, 
    CoreToolbarComponent,
    CoreSidenavComponent
  ]
})
export class CoreModule { }
