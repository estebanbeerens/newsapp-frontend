import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-core-toolbar-presenter',
  templateUrl: './core-toolbar-presenter.component.html',
  styleUrls: ['./core-toolbar-presenter.component.scss']
})
export class CoreToolbarPresenterComponent {
  
  userInitialValue: IUser = IUserInitialValue;

  @Input() sideNavToggled: boolean;
  @Input() authenticatedUser: IUser;

  @Output() onToggle = new EventEmitter();

  toggle(): void {
    this.onToggle.emit();
  }

}
