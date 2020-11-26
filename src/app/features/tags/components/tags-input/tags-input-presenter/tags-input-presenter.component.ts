import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITag } from 'src/app/features/tags/models/entities/tag';
import { ITagForm } from 'src/app/features/tags/models/form-models/tag-form';

@Component({
  selector: 'news-tags-input-presenter',
  templateUrl: './tags-input-presenter.component.html',
  styleUrls: ['./tags-input-presenter.component.scss']
})
export class TagsInputPresenterComponent {
  
  @Input() tag: ITag;
  @Input() isNew: boolean;
  @Input() generalForm: FormGroup;

  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter<ITagForm>();
  
  onCloseDialog(){
    this.closeDialog.emit();
  }

  onSubmit(data: ITagForm){
    this.submitForm.emit(data);
  }

}
