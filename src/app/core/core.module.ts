import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CoreFooterComponent } from './components/core-footer/core-footer.component';
import { CoreToolbarComponent } from './components/core-toolbar/core-toolbar.component';
import { CoreSidenavComponent } from './components/core-sidenav/core-sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { CoreEffects, CoreReducers } from 'src/app/core/state';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [CoreFooterComponent, CoreToolbarComponent, CoreSidenavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    SimplebarAngularModule,
    StoreModule.forFeature('core', CoreReducers),
    // EffectsModule.forFeature(CoreEffects)
  ],
  exports: [CoreFooterComponent, CoreToolbarComponent, CoreSidenavComponent]
})
export class CoreModule { }
