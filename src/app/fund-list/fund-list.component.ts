import { Component } from '@angular/core';
import { IFund } from './fund.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FundsService } from './funds.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent {
  funds!: IFund[]
  sortBy: string = ''

  constructor(
    private fundsSrv: FundsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('ngOnInit - AccountListComponent')
    this.fundsSrv.getFunds().subscribe( (funds) => { this.funds = funds})

    this.route.queryParams.subscribe( (params) => {
      this.sortBy = params['sortBy'] ?? ''
      // console.log(`Filter: ${this.sortBy}`)
    })
  }

  getSortedFunds(): IFund[] {
    // console.log(`getSortedFunds of: ${JSON.stringify(this.funds)}`)
    return this.funds;
  }
}
