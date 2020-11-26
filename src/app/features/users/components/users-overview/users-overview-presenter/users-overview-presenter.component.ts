import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRole } from 'src/app/features/roles/models/entities/role';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-users-overview-presenter',
  templateUrl: './users-overview-presenter.component.html',
  styleUrls: ['./users-overview-presenter.component.scss']
})
export class UsersOverviewPresenterComponent implements AfterViewInit {

  selected = new FormControl("0");
  selectedRoleId: number;

  @Input() users: IUser[];
  @Input() roles: IRole[];
  
  @Output() onRemove = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IUser>;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'username',
    'email',
    'actions'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.users) {
      this.initDataSource(changes.users.currentValue);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  initDataSource(users: IUser[]): void {
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.sort = this.sort;
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyRoleFilter(roleID: number) {
    let filteredUsers: IUser[] = [];

    if (roleID == 0) {
      filteredUsers = this.users;
    } else {
      this.users.forEach((user) => {
        if (user.roleID == roleID) {
          filteredUsers.push(user);
        }
      });
    }

    this.initDataSource(filteredUsers);
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  remove(userID: number): void {
    console.log(userID);
    this.onRemove.emit(userID);
  }

}
