import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LoanDetail } from './loan-detail';
import { Emi } from './emi';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(
    private http: HttpClient
  ) { }

  getLoanDetails(loanId) {
    return this.http.get<LoanDetail>(`${environment.apiDomainUrl}/loan/${loanId}`);
  }

  calculateEmi(calculationDetail) {
    return this.http.get<Emi>(`${environment.apiDomainUrl}/mortgage/emiCalculation`, calculationDetail);
  }
}
