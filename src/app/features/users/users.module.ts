import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from 'src/app/features/users/state/effects';
import { userReducer } from 'src/app/features/users/state/reducer';
import { UserApiService } from 'src/app/features/users/services/user-api.service';
import { UsersInputPresenterComponent } from './components/users-input/users-input-presenter/users-input-presenter.component';
import { UsersInputShellComponent } from './components/users-input/users-input-shell/users-input-shell.component';
import { UsersOverviewPresenterComponent } from './components/users-overview/users-overview-presenter/users-overview-presenter.component';
import { UsersOverviewShellComponent } from './components/users-overview/users-overview-shell/users-overview-shell.component';
import { roleReducer } from 'src/app/features/roles/state/reducer';
import { RoleEffects } from 'src/app/features/roles/state/effects';


@NgModule({
  declarations: [
    UsersInputPresenterComponent, 
    UsersInputShellComponent, 
    UsersOverviewPresenterComponent, 
    UsersOverviewShellComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature('users', userReducer),
    StoreModule.forFeature('roles', roleReducer),
    EffectsModule.forFeature([UserEffects]),
    EffectsModule.forFeature([RoleEffects])
  ],
  providers: [
    UserApiService
  ]
})
export class UsersModule { }
