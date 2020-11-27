import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftsRoutingModule } from './drafts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DraftsRoutingModule,
    SharedModule
  ]
})
export class DraftsModule { }
