import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreContentComponent } from 'src/app/core/components/content/content.component';

const routes: Routes = [
	{
		path: '',
		component: CoreContentComponent,
		children: [
			{ path: '', redirectTo: 'articles', pathMatch: 'full' },
			{ path: 'articles', loadChildren: () => import('../features/articles/articles.module').then(m => m.ArticlesModule) },
			{ path: 'tags', loadChildren: () => import('../features/tags/tags.module').then(m => m.TagsModule) },
			{ path: 'users', loadChildren: () => import('../features/users/users.module').then(m => m.UsersModule) },
			{ path: '**', redirectTo: 'articles' },
		],
	},
    {
      path: '**',
      redirectTo: '',
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule { }
