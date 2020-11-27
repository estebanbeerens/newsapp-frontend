import { DataSource } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { ITag } from 'src/app/features/tags/models/entities/tag';

@Component({
  selector: 'news-articles-overview-presenter',
  templateUrl: './articles-overview-presenter.component.html',
  styleUrls: ['./articles-overview-presenter.component.scss']
})
export class ArticlesOverviewPresenterComponent implements OnChanges {
  
  selected = new FormControl("0");

  dataSource: IArticle[] = [];
  
  @Input() articles: IArticle[];
  @Input() tags: ITag[];

  @Output() onRefresh = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.articles) {
      this.initDataSource(changes.articles.currentValue);
    }
  }

  initDataSource(articles: IArticle[]): void {
    this.dataSource = articles;
  }

  applySearchFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value.toLowerCase();
    let filteredArticles: IArticle[] = [];

    if (filterValue == '') {
      this.applyRoleFilter();
    } else {
      this.articles.forEach((article) => {
        if (article.title.toLowerCase().includes(filterValue) || article.shortSummary.toLowerCase().includes(filterValue)) {
          if (article.tagID == this.selected.value || this.selected.value == 0) {
            filteredArticles.push(article);
          }
        }
      });
      this.initDataSource(filteredArticles);
    }
  }

  applyRoleFilter(): void {
    let filteredArticles: IArticle[] = [];

    if (this.selected.value == 0) {
      filteredArticles = this.articles;
    } else {
      this.articles.forEach((article) => {
        if (article.tagID == this.selected.value) {
          filteredArticles.push(article);
        }
      });
    }
    
    this.initDataSource(filteredArticles);
  }

  refresh(): void {
    this.onRefresh.emit();
  }

}
