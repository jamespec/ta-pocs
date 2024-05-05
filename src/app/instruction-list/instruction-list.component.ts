import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAccount } from '../account-list/account.model';
import { InstructionsService } from './instructions.service';
import { IInstruction } from './instruction.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.css']
})
export class InstructionListComponent {
  instructions!: IInstruction[]

  displayedColumns: string[] = ['instructionId', 'action', 'amount', 'securityId', 'account', 'tradeDate', 'editButton']
  dataSource!: MatTableDataSource<IInstruction>
  dataInitialized: boolean = false

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private instructionsSrv: InstructionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('ngOnInit - FundListComponent')
    this.instructionsSrv.getInstructions().subscribe((instructions) => {
      this.instructions = instructions
      this.dataSource = new MatTableDataSource<IInstruction>(this.instructions)
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
