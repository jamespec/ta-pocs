import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAccount } from '../account-list/account.model';
import { InstructionsService } from './instructions.service';
import { IInstruction } from './instruction.model';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.css']
})
export class InstructionListComponent {
  instructions!: IInstruction[]
  sortBy: string = ''

  constructor(
    private instructionsSrv: InstructionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('ngOnInit - AccountListComponent')
    this.instructionsSrv.getInstructions().subscribe( (instruction) => { this.instructions = instruction})

    this.route.queryParams.subscribe( (params) => {
      this.sortBy = params['sortBy'] ?? ''
      // console.log(`Filter: ${this.sortBy}`)
    })
  }

  getSortedInstructions(): IInstruction[] {
    // console.log(`getSortedAccounts with accounts of: ${JSON.stringify(this.accounts)}`)
    return this.instructions;
  }
}
