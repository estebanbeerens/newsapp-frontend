import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftsInputShellComponent } from 'src/app/features/drafts/components/drafts-input/drafts-input-shell/drafts-input-shell.component';
import { DraftsOverviewShellComponent } from 'src/app/features/drafts/components/drafts-overview/drafts-overview-shell/drafts-overview-shell.component';

const routes: Routes = [
  {
    path: '',
    component: DraftsOverviewShellComponent
  },
  {
    path: ':id/edit',
    component: DraftsInputShellComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftsRoutingModule { }
