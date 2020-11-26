import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { authReducer } from 'src/app/auth/state/reducer';
import { AuthEffects } from 'src/app/auth/state/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthApiService } from 'src/app/auth/services/auth-api.service';
import { AuthLoginPresenterComponent } from 'src/app/auth/components/auth-login/auth-login-presenter/auth-presenter.component';
import { AuthLoginShellComponent } from 'src/app/auth/components/auth-login/auth-login-shell/auth-shell.component';
import { AuthRegisterShellComponent } from './components/auth-register/auth-register-shell/auth-register-shell.component';
import { AuthRegisterPresenterComponent } from './components/auth-register/auth-register-presenter/auth-register-presenter.component';

@NgModule({
  declarations: [
    AuthLoginShellComponent, 
    AuthLoginPresenterComponent, AuthRegisterShellComponent, AuthRegisterPresenterComponent
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
