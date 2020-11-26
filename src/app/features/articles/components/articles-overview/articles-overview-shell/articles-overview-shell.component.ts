import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { ArticleFacade } from 'src/app/features/articles/state/facade';
import { ITag } from 'src/app/features/tags/models/entities/tag';
import { TagFacade } from 'src/app/features/tags/state/facade';

@Component({
  selector: 'news-articles-overview-shell',
  templateUrl: './articles-overview-shell.component.html',
  styleUrls: ['./articles-overview-shell.component.scss']
})
export class ArticlesOverviewShellComponent implements OnInit {

  isLoading$: Observable<boolean>;
  articles$: Observable<IArticle[]>;
  articleStatuses$: Observable<IArticleStatus[]>;
  tags$: Observable<ITag[]>;

  constructor(
    private articleFacade: ArticleFacade,
    private tagFacade: TagFacade,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.articleFacade.getOverviewIsLoading();
    this.articles$ = this.articleFacade.getAll()
    this.tags$ = this.tagFacade.getAll();
  }

  refresh(): void {
    this.articles$ = this.articleFacade.getAll();
  }

}
