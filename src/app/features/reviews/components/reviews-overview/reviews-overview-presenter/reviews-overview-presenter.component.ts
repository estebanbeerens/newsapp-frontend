import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IArticle } from 'src/app/features/articles/models/entities/article';

@Component({
  selector: 'news-reviews-overview-presenter',
  templateUrl: './reviews-overview-presenter.component.html',
  styleUrls: ['./reviews-overview-presenter.component.scss']
})
export class ReviewsOverviewPresenterComponent implements AfterViewInit, OnChanges {
  
  @Input() articles: IArticle[];

  @Output() onEdit = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IArticle>;
  displayedColumns: string[] = [
    'title',
    'actions'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.articles) {
      this.initDataSource(changes.articles.currentValue);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  initDataSource(articles: IArticle[]): void {
    const articlesFiltered: IArticle[] = [];
    articles.forEach((article) => {
      if (article.articleStatusID == 2) {
        articlesFiltered.push(article);
      }
    });
    this.dataSource = new MatTableDataSource(articlesFiltered);
    this.dataSource.sort = this.sort;
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id: number): void {
    this.onEdit.emit(id);
  }

  remove(id: number): void {
    this.onRemove.emit(id);
  }

}
