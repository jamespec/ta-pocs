import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccount } from './account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private http: HttpClient
  ) { }

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>('/api/account')
  }  
}
