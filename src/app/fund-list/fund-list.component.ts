import { Component, ViewChild } from '@angular/core';
import { IFund } from './fund.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FundsService } from './funds.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent {
  funds!: IFund[]

  displayedColumns: string[] = ['securityId', 'fundNumber', 'fundName', 'deployAddress', 'editButton']
  dataSource!: MatTableDataSource<IFund>
  dataInitialized: boolean = false

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fundsSrv: FundsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('ngOnInit - FundListComponent')
    this.fundsSrv.getFunds().subscribe((funds) => {
      this.funds = funds
      this.dataSource = new MatTableDataSource<IFund>(this.funds)
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
