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
import { ArticleApiService } from 'src/app/features/articles/services/article-api.service';
import { ArticleEffects } from 'src/app/features/articles/state/effects';
import { articleReducer } from 'src/app/features/articles/state/reducer';
import { ArticlesInputShellComponent } from './components/articles-input/articles-input-shell/articles-input-shell.component';
import { ArticlesInputPresenterComponent } from './components/articles-input/articles-input-presenter/articles-input-presenter.component';


@NgModule({
  declarations: [
    ArticlesDetailsShellComponent, 
    ArticlesDetailsPresenterComponent, 
    ArticlesOverviewPresenterComponent, 
    ArticlesOverviewShellComponent, 
    ArticlesInputShellComponent, 
    ArticlesInputPresenterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticlesRoutingModule,
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forFeature([ArticleEffects])
  ],
  providers: [
    ArticleApiService
  ]
})
export class ArticlesModule { }
