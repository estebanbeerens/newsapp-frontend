import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IRole } from 'src/app/features/roles/models/entities/role';
import { RoleFacade } from 'src/app/features/roles/state/facade';
import { UsersInputShellComponent } from 'src/app/features/users/components/users-input/users-input-shell/users-input-shell.component';
import { IUser } from 'src/app/features/users/models/entities/user';
import { UserFacade } from 'src/app/features/users/state/facade';

@Component({
  selector: 'news-users-overview-shell',
  templateUrl: './users-overview-shell.component.html',
  styleUrls: ['./users-overview-shell.component.scss']
})
export class UsersOverviewShellComponent implements OnInit {

  isLoading$: Observable<boolean>;
  users$: Observable<IUser[]>;
  roles$: Observable<IRole[]>;

  title: string = "Overzicht gebruikers";

  constructor(
    private userFacade: UserFacade,
    private roleFacade: RoleFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.userFacade.getOverviewIsLoading();
    this.users$ = this.userFacade.getAll();
    this.roles$ = this.roleFacade.getAll();
  }

  create(): void {
    const dialogRef = this.dialog.open(UsersInputShellComponent, {
      width: '90%'
    });
  }

  remove(userID: number): void {
    this.userFacade.remove(userID);
  }

}
