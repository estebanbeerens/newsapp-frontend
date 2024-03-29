import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersOverviewShellComponent } from 'src/app/features/users/components/users-overview/users-overview-shell/users-overview-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersOverviewShellComponent
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
export class UsersRoutingModule { }
