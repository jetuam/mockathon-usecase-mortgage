import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Loan } from './loan';
import { LoanService } from './loan.service';
import { LoanDetail } from './loan-detail';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  form: FormGroup;
  loanNo: number;
  loanDetails: LoanDetail;
  @Input() loans: Loan[] = [];

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      loanNo: ['', Validators.required]
    });
  }

  onGetLoanDetails() {
    if (this.form.valid) {
      this.loanService.getLoanDetails(this.form.value.loanNo).subscribe(res => {
        this.loanDetails = res;
      });
    }
  }

}
