import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsInputShellComponent } from './components/reviews-input/reviews-input-shell/reviews-input-shell.component';
import { ReviewsInputPresenterComponent } from './components/reviews-input/reviews-input-presenter/reviews-input-presenter.component';
import { ReviewsOverviewPresenterComponent } from './components/reviews-overview/reviews-overview-presenter/reviews-overview-presenter.component';
import { ReviewsOverviewShellComponent } from './components/reviews-overview/reviews-overview-shell/reviews-overview-shell.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/auth/state/reducer';
import { TagEffects } from 'src/app/features/tags/state/effects';
import { tagReducer } from 'src/app/features/tags/state/reducer';
import { reviewReducer } from 'src/app/features/reviews/state/reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleApiService } from 'src/app/features/articles/services/article-api.service';
import { ReviewEffects } from 'src/app/features/reviews/state/effects';
import { articleStatusReducer } from 'src/app/features/article-statuses/state/reducer';
import { ArticleStatusEffects } from 'src/app/features/article-statuses/state/effects';


@NgModule({
  declarations: [ReviewsInputShellComponent, ReviewsInputPresenterComponent, ReviewsOverviewPresenterComponent, ReviewsOverviewShellComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    SharedModule,
    StoreModule.forFeature('reviews', reviewReducer),
    StoreModule.forFeature('tags', tagReducer),
    StoreModule.forFeature('article-statuses', articleStatusReducer),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([ReviewEffects]),
    EffectsModule.forFeature([ArticleStatusEffects]),
    EffectsModule.forFeature([TagEffects])
  ],
  providers: [
    ArticleApiService
  ]
})
export class ReviewsModule { }
