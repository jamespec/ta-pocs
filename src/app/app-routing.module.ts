import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';

const routes: Routes = [
  { path: 'accounts', component: AccountListComponent, title: "Accounts" },
  { path: 'funds', component: FundListComponent, title: "Funds" },
  { path: 'instructions', component: InstructionListComponent, title: "Instructions" },
  { path: '', component: AccountListComponent, title: "Accounts" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
