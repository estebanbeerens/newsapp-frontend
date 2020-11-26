import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITag } from 'src/app/features/tags/models/entities/tag';

@Component({
  selector: 'news-tags-overview-presenter',
  templateUrl: './tags-overview-presenter.component.html',
  styleUrls: ['./tags-overview-presenter.component.scss']
})
export class TagsOverviewPresenterComponent implements AfterViewInit, OnChanges {
  
  @Input() tags: ITag[];

  @Output() onEdit = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<ITag>;
  displayedColumns: string[] = [
    'name',
    'actions'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tags) {
      this.initDataSource(changes.tags.currentValue);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  initDataSource(tags: ITag[]): void {
    this.dataSource = new MatTableDataSource(tags);
    this.dataSource.sort = this.sort;
  }


  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(tagID: number): void {
    this.onEdit.emit(tagID);
  }

  remove(tagID: number): void {
    this.onRemove.emit(tagID);
  }

}
