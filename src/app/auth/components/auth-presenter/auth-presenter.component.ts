import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICredentials } from 'src/app/auth/models/entities/credentials';

@Component({
  selector: 'news-auth-presenter',
  templateUrl: './auth-presenter.component.html',
  styleUrls: ['./auth-presenter.component.scss']
})
export class AuthPresenterComponent {

  hide = true;
  @Input() generalForm: FormGroup;
  @Output() submitForm = new EventEmitter<ICredentials>();

  constructor() { }
  
  onSubmit(data: ICredentials){
    this.submitForm.emit(data);
  }

}
