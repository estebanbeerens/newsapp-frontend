import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IRegister } from 'src/app/auth/models/form-models/register';

@Component({
  selector: 'news-auth-register-presenter',
  templateUrl: './auth-register-presenter.component.html',
  styleUrls: ['./auth-register-presenter.component.scss']
})
export class AuthRegisterPresenterComponent {

  hide = true;
  @Input() generalForm: FormGroup;
  @Output() submitForm = new EventEmitter<IRegister>();

  constructor() { }
  
  onSubmit(data: IRegister){
    this.submitForm.emit(data);
  }

}
