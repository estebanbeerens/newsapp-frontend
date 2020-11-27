import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesDetailsShellComponent } from './components/articles-details/articles-details-shell/articles-details-shell.component';
import { ArticlesDetailsPresenterComponent } from './components/articles-details/articles-details-presenter/articles-details-presenter.component';
import { ArticlesOverviewPresenterComponent } from 'src/app/features/articles/components/articles-overview/articles-overview-presenter/articles-overview-presenter.component';
import { ArticlesOverviewShellComponent } from './components/articles-overview/articles-overview-shell/articles-overview-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { ArticleApiService } from 'src/app/features/articles/services/article-api.service';
import { ArticleEffects } from 'src/app/features/articles/state/effects';
import { articleReducer } from 'src/app/features/articles/state/reducer';
import { TagEffects } from 'src/app/features/tags/state/effects';
import { tagReducer } from 'src/app/features/tags/state/reducer';
import { likeReducer } from 'src/app/features/likes/state/reducer';
import { commentReducer } from 'src/app/features/comments/state/reducer';
import { LikeEffects } from 'src/app/features/likes/state/effects';
import { authReducer } from 'src/app/auth/state/reducer';
import { CommentEffects } from 'src/app/features/comments/state/effects';


@NgModule({
  declarations: [
    ArticlesDetailsShellComponent, 
    ArticlesDetailsPresenterComponent, 
    ArticlesOverviewPresenterComponent, 
    ArticlesOverviewShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticlesRoutingModule,
    MatCardModule,
    StoreModule.forFeature('articles', articleReducer),
    StoreModule.forFeature('tags', tagReducer),
    StoreModule.forFeature('likes', likeReducer),
    StoreModule.forFeature('comments', commentReducer),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([ArticleEffects]),
    EffectsModule.forFeature([TagEffects]),
    EffectsModule.forFeature([LikeEffects]),
    EffectsModule.forFeature([TagEffects]),
    EffectsModule.forFeature([CommentEffects])
  ],
  providers: [
    ArticleApiService
  ]
})
export class ArticlesModule { }
