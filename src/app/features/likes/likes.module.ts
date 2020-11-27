import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeApiService } from 'src/app/features/likes/services/like-api.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { likeReducer } from 'src/app/features/likes/state/reducer';
import { LikeEffects } from 'src/app/features/likes/state/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('likes', likeReducer),
    EffectsModule.forFeature([LikeEffects])
  ],
  providers: [
    LikeApiService
  ]
})
export class LikesModule { }
