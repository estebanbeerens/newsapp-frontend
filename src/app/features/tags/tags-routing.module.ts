import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsOverviewShellComponent } from 'src/app/features/tags/components/tags-overview/tags-overview-shell/tags-overview-shell.component';

const routes: Routes = [
  {
    path: '',
    component: TagsOverviewShellComponent
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
export class TagsRoutingModule { }
