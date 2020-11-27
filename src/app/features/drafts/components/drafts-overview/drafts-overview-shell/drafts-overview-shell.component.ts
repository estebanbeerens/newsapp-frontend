import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { DraftFacade } from 'src/app/features/drafts/state/facade';

@Component({
  selector: 'news-drafts-overview-shell',
  templateUrl: './drafts-overview-shell.component.html',
  styleUrls: ['./drafts-overview-shell.component.scss']
})
export class DraftsOverviewShellComponent implements OnInit {

  title: string = 'Overzicht drafts';

  isLoading$: Observable<boolean>;
  articles$: Observable<IArticle[]>;
  
  constructor(
    private draftFacade: DraftFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.draftFacade.getOverviewIsLoading();
    this.articles$ = this.draftFacade.getAll()
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
