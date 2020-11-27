import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsInputShellComponent } from 'src/app/features/reviews/components/reviews-input/reviews-input-shell/reviews-input-shell.component';
import { ReviewsOverviewShellComponent } from 'src/app/features/reviews/components/reviews-overview/reviews-overview-shell/reviews-overview-shell.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsOverviewShellComponent
  },
  {
    path: ':id/review',
    component: ReviewsInputShellComponent,
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
export class ReviewsRoutingModule { }
