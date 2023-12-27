import { Component } from '@angular/core';
import { IAccount } from './account.model';
import { AccountsService } from './accounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  accounts!: IAccount[]
  sortBy: string = ''

  constructor(
    private accountsSrv: AccountsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('ngOnInit - AccountListComponent')
    this.accountsSrv.getAccounts().subscribe( (accounts) => { this.accounts = accounts})

    this.route.queryParams.subscribe( (params) => {
      this.sortBy = params['sortBy'] ?? ''
      // console.log(`Filter: ${this.sortBy}`)
    })
  }

  getSortedAccounts(): IAccount[] {
    // console.log(`getSortedAccounts with accounts of: ${JSON.stringify(this.accounts)}`)
    return this.accounts;

    // return this.sortBy === '' || !this.accounts
    //   ? this.accounts
    //   : this.accounts.sort( (a: IAccount, b: IAccount) => a.fsrAccount - b.fsrAccount  )
  }
}

