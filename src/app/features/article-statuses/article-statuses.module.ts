import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleStatusApiService } from 'src/app/features/article-statuses/services/article-status-api.service';
import { StoreModule } from '@ngrx/store';
import { articleStatusReducer } from 'src/app/features/article-statuses/state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleStatusEffects } from 'src/app/features/article-statuses/state/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('article-statuses', articleStatusReducer),
    EffectsModule.forFeature([ArticleStatusEffects])
  ],
  providers: [
    ArticleStatusApiService
  ]
})
export class ArticleStatusesModule { }
