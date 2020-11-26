import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IRole } from 'src/app/features/roles/models/entities/role';
import { RoleFacade } from 'src/app/features/roles/state/facade';
import { IRegisterAdmin } from 'src/app/features/users/models/form-models/register-admin';
import { UserFacade } from 'src/app/features/users/state/facade';

@Component({
  selector: 'news-users-input-shell',
  templateUrl: './users-input-shell.component.html',
  styleUrls: ['./users-input-shell.component.scss']
})
export class UsersInputShellComponent implements OnInit {

  roles$: Observable<IRole[]>;
  generalForm: FormGroup;
  
  constructor(
    private userFacade: UserFacade,
    private roleFacade: RoleFacade,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UsersInputShellComponent>
  ) { }

  ngOnInit(): void {
    this.roles$ = this.roleFacade.getAll();
    this.loadForm();
  }

  loadForm(){
    this.generalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      roleID: [null, Validators.required],
      email: ['', Validators.required]
    });
  }

  submitForm(formValue: IRegisterAdmin): void {
    this.userFacade.create(formValue);
    this.dialogRef.close();
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

}
