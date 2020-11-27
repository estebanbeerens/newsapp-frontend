import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreContentComponent } from 'src/app/core/components/content/content.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { JournalistGuard } from 'src/app/core/guards/journalist.guard';

const routes: Routes = [
	{
		path: '',
		component: CoreContentComponent,
		children: [
			{ path: '', redirectTo: 'articles', pathMatch: 'full' },
			{ path: 'articles', loadChildren: () => import('../features/articles/articles.module').then(m => m.ArticlesModule) },
			{ path: 'drafts', loadChildren: () => import('../features/drafts/drafts.module').then(m => m.DraftsModule), canActivate: [JournalistGuard] },
			{ path: 'reviews', loadChildren: () => import('../features/reviews/reviews.module').then(m => m.ReviewsModule), canActivate: [AdminGuard] },
			{ path: 'tags', loadChildren: () => import('../features/tags/tags.module').then(m => m.TagsModule), canActivate: [AdminGuard] },
			{ path: 'users', loadChildren: () => import('../features/users/users.module').then(m => m.UsersModule), canActivate: [AdminGuard] },
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
