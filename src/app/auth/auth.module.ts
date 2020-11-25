import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { authReducer } from 'src/app/auth/state/reducer';
import { AuthEffects } from 'src/app/auth/state/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthShellComponent } from './components/auth-shell/auth-shell.component';
import { AuthPresenterComponent } from './components/auth-presenter/auth-presenter.component';
import { AuthApiService } from 'src/app/auth/services/auth-api.service';

@NgModule({
  declarations: [
    AuthShellComponent, 
    AuthPresenterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthApiService
  ]
})
export class AuthModule { }
