import { Component, OnInit } from '@angular/core';
import { AuthFacade } from 'src/app/auth/state/facade';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class CoreContentComponent implements OnInit {

  constructor(
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.authFacade.checkLogin();
  }

}
