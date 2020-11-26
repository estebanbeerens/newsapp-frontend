import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IRole } from 'src/app/features/roles/models/entities/role';
import { IRegisterAdmin } from 'src/app/features/users/models/form-models/register-admin';

@Component({
  selector: 'news-users-input-presenter',
  templateUrl: './users-input-presenter.component.html',
  styleUrls: ['./users-input-presenter.component.scss']
})
export class UsersInputPresenterComponent  {
  
  hide: boolean = true;

  @Input() generalForm: FormGroup;
  @Input() roles: IRole[];

  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter<IRegisterAdmin>();

  onCloseDialog(){
    this.closeDialog.emit();
  }

  onSubmit(data: IRegisterAdmin){
    this.submitForm.emit(data);
  }

}
