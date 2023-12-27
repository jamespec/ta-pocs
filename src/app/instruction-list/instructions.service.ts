import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstruction } from './instruction.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  constructor(
    private http: HttpClient
  ) { }

  getInstructions(): Observable<IInstruction[]> {
    return this.http.get<IInstruction[]>('/api/instruction')
  }  
}
