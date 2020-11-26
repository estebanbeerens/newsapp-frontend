import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { ITag } from 'src/app/features/tags/models/entities/tag';

@Component({
  selector: 'news-articles-overview-presenter',
  templateUrl: './articles-overview-presenter.component.html',
  styleUrls: ['./articles-overview-presenter.component.scss']
})
export class ArticlesOverviewPresenterComponent {
  
  selected = new FormControl("0");
  selectedTagId: number;
  
  @Input() articles: IArticle[];
  @Input() tags: ITag[];

  @Output() onRefresh = new EventEmitter();

  refresh(): void {
    this.onRefresh.emit();
  }

}
