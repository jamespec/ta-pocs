import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  activePage: string = 'Accounts'
  constructor(
  ) { }

  ngOnInit() {
  }

  setActivePage( page: string ) {
    this.activePage = page
  }
}
