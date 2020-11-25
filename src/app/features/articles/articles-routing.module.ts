import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesDetailsShellComponent } from 'src/app/features/articles/components/articles-details/articles-details-shell/articles-details-shell.component';
import { ArticlesOverviewShellComponent } from 'src/app/features/articles/components/articles-overview/articles-overview-shell/articles-overview-shell.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesOverviewShellComponent
  },
  {
    path: ':id/details',
    component: ArticlesDetailsShellComponent,
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
export class ArticlesRoutingModule { }
