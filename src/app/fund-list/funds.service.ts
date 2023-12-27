import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFund } from './fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(
    private http: HttpClient
  ) { }

  getFunds(): Observable<IFund[]> {
    return this.http.get<IFund[]>('/api/fund')
  }  }
