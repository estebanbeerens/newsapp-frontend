import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { DraftFacade } from 'src/app/features/drafts/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-drafts-overview-shell',
  templateUrl: './drafts-overview-shell.component.html',
  styleUrls: ['./drafts-overview-shell.component.scss']
})
export class DraftsOverviewShellComponent implements OnInit {

  title: string = 'Overzicht drafts';

  authenticatedUser$: Observable<IUser>;
  isLoading$: Observable<boolean>;
  articles$: Observable<IArticle[]>;
  
  constructor(
    private draftFacade: DraftFacade,
    private authFacade: AuthFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authenticatedUser$ = this.authFacade.getCurrentUser();
    this.isLoading$ = this.draftFacade.getOverviewIsLoading();
    this.articles$ = this.draftFacade.getAll();
  }

  create(): void {
    this.router.navigate(['/app/drafts/0/edit'])
  }

  edit(id: number): void {
    this.router.navigate([`/app/drafts/${id}/edit`])
  }

  remove(id: number): void {
    this.draftFacade.remove(id);
  }

}
