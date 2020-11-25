import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICredentials } from 'src/app/auth/models/entities/credentials';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss']
})
export class AuthShellComponent implements OnInit {

  authenticatedUser$: Observable<IUser>;
  generalForm: FormGroup;

  constructor(
    private authFacade: AuthFacade, 
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authenticatedUser$ = this.authFacade.getCurrentUser();
    this.loadForm();
    // this.authenticatedUser$.subscribe((user) => {
    //   if(user != null) {
    //     this.router.navigate(['/app']);
    //   } else {
    //     this.loadForm()
    //   }
    // });
  }

  loadForm(): void {
    this.generalForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm(credentials: ICredentials): void {
    // this.authFacade.login(credentials);
  }

}
