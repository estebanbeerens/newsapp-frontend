import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-footer',
  templateUrl: './core-footer.component.html',
  styleUrls: ['./core-footer.component.scss']
})
export class CoreFooterComponent implements OnInit {
  
  copyrightDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
