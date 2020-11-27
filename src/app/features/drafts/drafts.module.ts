import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftsRoutingModule } from './drafts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleApiService } from 'src/app/features/articles/services/article-api.service';
import { DraftsOverviewPresenterComponent } from './components/drafts-overview/drafts-overview-presenter/drafts-overview-presenter.component';
import { DraftsOverviewShellComponent } from './components/drafts-overview/drafts-overview-shell/drafts-overview-shell.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DraftEffects } from 'src/app/features/drafts/state/effects';
import { draftReducer } from 'src/app/features/drafts/state/reducer';
import { DraftsInputPresenterComponent } from './components/drafts-input/drafts-input-presenter/drafts-input-presenter.component';
import { DraftsInputShellComponent } from './components/drafts-input/drafts-input-shell/drafts-input-shell.component';
import { tagReducer } from 'src/app/features/tags/state/reducer';
import { TagEffects } from 'src/app/features/tags/state/effects';
import { authReducer } from 'src/app/auth/state/reducer';


@NgModule({
  declarations: [
    DraftsOverviewPresenterComponent, 
    DraftsOverviewShellComponent, DraftsInputPresenterComponent, DraftsInputShellComponent
  ],
  imports: [
    CommonModule,
    DraftsRoutingModule,
    SharedModule,
    StoreModule.forFeature('drafts', draftReducer),
    StoreModule.forFeature('tags', tagReducer),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([DraftEffects]),
    EffectsModule.forFeature([TagEffects])
  ],
  providers: [
    ArticleApiService
  ]
})
export class DraftsModule { }
