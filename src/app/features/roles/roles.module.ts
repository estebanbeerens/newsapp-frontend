import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RoleEffects } from 'src/app/features/roles/state/effects';
import { roleReducer } from 'src/app/features/roles/state/reducer';
import { RoleApiService } from 'src/app/features/roles/services/role-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('roles', roleReducer),
    EffectsModule.forFeature([RoleEffects])
  ],
  providers: [
    RoleApiService
  ]
})
export class RolesModule { }
