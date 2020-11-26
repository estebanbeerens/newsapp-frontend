import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IRegister } from 'src/app/auth/models/form-models/register';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-auth-register-shell',
  templateUrl: './auth-register-shell.component.html',
  styleUrls: ['./auth-register-shell.component.scss']
})
export class AuthRegisterShellComponent implements OnInit {
  
  generalForm: FormGroup;
  sub: Subscription;

  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.generalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submitForm(formValue: IRegister): void {
    this.authFacade.register(formValue);
    this.router.navigate(['auth/login']);
  }

}
