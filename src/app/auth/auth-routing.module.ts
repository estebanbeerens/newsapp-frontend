import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthShellComponent } from 'src/app/auth/components/auth-shell/auth-shell.component';

const routes: Routes = [
	{
		path: '',
		component: AuthShellComponent
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
export class AuthRoutingModule { }
