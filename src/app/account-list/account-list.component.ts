import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { IAccount } from './account.model';
import { AccountsService } from './accounts.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, AfterViewInit {
  accounts!: IAccount[]

  displayedColumns: string[] = ['fsrAccount', 'name', 'currency', 'walletAddress', 'editButton']
  dataSource!: MatTableDataSource<IAccount>
  dataInitialized: boolean = false

  constructor(
    private accountsSrv: AccountsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    console.log('ngOnInit - AccountListComponent')
    this.accountsSrv.getAccounts().subscribe((accounts) => {
      this.accounts = accounts
      this.dataSource = new MatTableDataSource<IAccount>(this.accounts)
      this.dataInitialized = true
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    console.log()
    if (this.dataInitialized) {
    }
  }
}
