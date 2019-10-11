import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {

  constructor(
    private http: HttpClient
  ) { }

  calculateEMI(params) {
    return this.http.post(`${environment.apiDomainUrl}/emiCalculation`, params);
  }

  applyLoan(loanDetails) {
    return this.http.post(`${environment.apiDomainUrl}/loans`, loanDetails);
  }
}
