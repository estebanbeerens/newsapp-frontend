import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICredentials } from 'src/app/auth/models/form-models/credentials';

@Component({
  selector: 'news-auth-login-presenter',
  templateUrl: './auth-presenter.component.html',
  styleUrls: ['./auth-presenter.component.scss']
})
export class AuthLoginPresenterComponent {

  hide = true;
  @Input() generalForm: FormGroup;
  @Output() submitForm = new EventEmitter<ICredentials>();

  constructor() { }
  
  onSubmit(data: ICredentials){
    this.submitForm.emit(data);
  }

}
