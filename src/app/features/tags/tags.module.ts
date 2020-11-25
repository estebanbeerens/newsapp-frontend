import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagApiService } from 'src/app/features/tags/services/tag-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TagEffects } from 'src/app/features/tags/state/effects';
import { tagReducer } from 'src/app/features/tags/state/reducer';
import { TagsInputShellComponent } from './components/tags-input/tags-input-shell/tags-input-shell.component';
import { TagsInputPresenterComponent } from './components/tags-input/tags-input-presenter/tags-input-presenter.component';
import { TagsOverviewPresenterComponent } from './components/tags-overview/tags-overview-presenter/tags-overview-presenter.component';
import { TagsOverviewShellComponent } from './components/tags-overview/tags-overview-shell/tags-overview-shell.component';


@NgModule({
  declarations: 
  [TagsInputShellComponent, 
    TagsInputPresenterComponent, 
    TagsOverviewPresenterComponent, 
    TagsOverviewShellComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    SharedModule,
    StoreModule.forFeature('tags', tagReducer),
    EffectsModule.forFeature([TagEffects])
  ],
  providers: [
    TagApiService
  ]
})
export class TagsModule { }
