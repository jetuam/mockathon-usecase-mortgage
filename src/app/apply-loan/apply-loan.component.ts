import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyLoanService } from './apply-loan.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  loanForm: FormGroup;
  showLoanApplicationPanel: boolean = true;
  cities: any = [
    'Bangalore',
    'Chennai',
    'Hyderabed',
    'Pune',
    'Mumbai',
    'Delhi'
  ];
  constructor(
    private fb: FormBuilder,
    private loan: ApplyLoanService
  ) { }

  ngOnInit() {
    this.loanForm = this.fb.group({
      loanType: ['Mortage'],
      customer: this.fb.group({
        city: ['', Validators.required],
        customerId: [''],
        customerType: [''],
        dob: [''],
        emailId: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        middleName: ['', Validators.required],
        mobileNo: ['', Validators.required],
        panNumber: ['', Validators.required],
        pinCode: ['', Validators.required]
      }),
      loan: this.fb.group({
        emi: [''],
        loanAmount: [''],
        loanId: [''],
        rateOfInterest: [''],
        tenure: ['']
      }),
      salariedEmployee: this.fb.group({
        designation: [''],
        monthlySalary: [''],
        officialEmailId: [''],
        officialPhoneNumber: [''],
        organizationName: [''],
        salariedEmployeeId: ['']
      }),
      selfEmployee: this.fb.group({
        latestTurnover: [''],
        nameofBusiness: [''],
        natureOfBusiness: [''],
        selfEmployeeId: ['']
      })
    });
  }

  chooseLoanType(loanType) {
    // let v = this.loanForm.get('');
    this.showLoanApplicationPanel = this.loanForm.get('loanType').touched && loanType == 'Mortage' ? true : false;

    // console.log(v);
    // this.showLoanApplicationPanel = (this.loanForm.get('loanType').touched && this.loanForm.get('loanType').valid && loanType === 'Mortage') ? true : false;
    // this.showLoanApplicationPanel = loanType === 'Mortage' ? true : false;
  }

  applyLoan() {
    console.log(this.loanForm.value);
    this.loan.applyLoan(this.loanForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
