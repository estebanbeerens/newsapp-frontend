import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole } from 'src/app/features/roles/models/entities/role';
import { RoleFacade } from 'src/app/features/roles/state/facade';
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
    private roleFacade: RoleFacade
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.userFacade.getOverviewIsLoading();
    this.users$ = this.userFacade.getAll();
    this.roles$ = this.roleFacade.getAll();
  }

  remove(userID: number): void {
    this.userFacade.remove(userID);
  }

}
