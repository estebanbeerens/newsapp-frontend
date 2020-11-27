import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentApiService } from 'src/app/features/comments/services/comment-api.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { commentReducer } from 'src/app/features/comments/state/reducer';
import { CommentEffects } from 'src/app/features/comments/state/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('comments', commentReducer),
    EffectsModule.forFeature([CommentEffects])
  ],
  providers: [
    CommentApiService
  ]
})
export class CommentsModule { }
