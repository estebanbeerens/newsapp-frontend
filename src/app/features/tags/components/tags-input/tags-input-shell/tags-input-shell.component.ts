import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ITag } from 'src/app/features/tags/models/entities/tag';
import { ITagForm } from 'src/app/features/tags/models/form-models/tag-form';
import { TagFacade } from 'src/app/features/tags/state/facade';

@Component({
  selector: 'news-tags-input-shell',
  templateUrl: './tags-input-shell.component.html',
  styleUrls: ['./tags-input-shell.component.scss']
})
export class TagsInputShellComponent implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;
  tag$: Observable<ITag>;

  generalForm: FormGroup;
  selectedTagId: number;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private tagFacade: TagFacade,
    public dialogRef: MatDialogRef<TagsInputShellComponent>
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.tagFacade.getDetailsIsLoading();
    this.tag$ = this.tagFacade.getDetails();

    this.sub = this.tag$.subscribe((tag) => {
      this.loadForm(tag);
      this.defineIsNew(tag);
    });
  }
  
  defineIsNew(tag: ITag) {
    if (tag.tagID == 0 ){
      this.isNew = true;
    } else {
      this.isNew = false;
    }
    this.selectedTagId = tag.tagID;
  }

  loadForm(tag: ITag) {
    if (tag) {
      this.generalForm = this.formBuilder.group({
        name: [tag.name, Validators.required]
      })
    } else {
      this.generalForm = this.formBuilder.group({
        name: ['', Validators.required]
      })
    }
  }

  submitForm(formOutput: ITagForm): void {
    if (this.isNew) {
        this.tagFacade.create(formOutput);
    } else {
      this.tagFacade.update(this.selectedTagId, formOutput);
    }
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.sub.unsubscribe();
  }
  
  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }

}
