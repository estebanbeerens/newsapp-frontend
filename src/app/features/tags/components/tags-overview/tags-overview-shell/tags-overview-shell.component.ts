import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TagsInputShellComponent } from 'src/app/features/tags/components/tags-input/tags-input-shell/tags-input-shell.component';
import { ITag } from 'src/app/features/tags/models/entities/tag';
import { TagFacade } from 'src/app/features/tags/state/facade';

@Component({
  selector: 'news-tags-overview-shell',
  templateUrl: './tags-overview-shell.component.html',
  styleUrls: ['./tags-overview-shell.component.scss']
})
export class TagsOverviewShellComponent implements OnInit {

  title: string = 'Overzicht categorieën';

  tags$: Observable<ITag[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private tagFacade: TagFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tags$ = this.tagFacade.getAll();
    this.isLoading$ = this.tagFacade.getOverviewIsLoading();
  }

  create(): void {
    this.tagFacade.getById(0);
    const dialogRef = this.dialog.open(TagsInputShellComponent, {
      width: '90%'
    });
  }

  edit(tagID: number): void {
    this.tagFacade.getById(tagID);
    const dialogRef = this.dialog.open(TagsInputShellComponent, {
      width: '90%'
    });
  }

  remove(tagID: number): void {
    this.tagFacade.remove(tagID);
  }

}
