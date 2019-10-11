import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyLoanService } from './apply-loan.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  loanForm: FormGroup;
  showLoanApplicationPanel: boolean = true;
  eligible: boolean = false;
  displayEligible: boolean = false;
  chartData = {};
  cities: any = [
    'Bangalore',
    'Chennai',
    'Hyderabed',
    'Pune',
    'Mumbai',
    'Delhi'
  ];
  customerId: number;
  constructor(
    private fb: FormBuilder,
    private loan: ApplyLoanService,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    // var principal = parseFloat(500000);
    // var interest = parseFloat(10) / 100 / 12;
    // var payments = parseFloat(5) * 12;

    // var x = Math.pow(1 + interest, payments);
    // var monthly = (principal * x * interest) / (x - 1);
    // let toalInterest = ((monthly * payments) - principal).toFixed(2);
    // console.log(toalInterest);

    // this.chartData = {
    //   labels: [],
    //   datasets: [
    //     {
    //       data: [100, 50, 200],
    //       backgroundColor: [
    //         "#FF6384",
    //         "#36A2EB",
    //         "#FFCE56"
    //       ],
    //       hoverBackgroundColor: [
    //         "#FF6384",
    //         "#36A2EB",
    //         "#FFCE56"
    //       ]
    //     }]
    // };

    let user = this.loginService.getUser;
    if (user) {
      this.customerId = user.loanDetails[0].customerId;
      this.customerId++;
    }

    this.loanForm = this.fb.group({
      loanType: ['Mortage'],
      customer: this.fb.group({
        city: ['', Validators.required],
        customerId: [{ value: this.customerId, disabled: true }],
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
        emi: [{ value: '', disabled: true }],
        loanAmount: [''],
        rateOfInterest: [{ value: 10, disabled: true }],
        tenure: ['']
      }),
      salariedEmployee: this.fb.group({
        designation: [''],
        monthlySalary: [''],
        officialEmailId: [''],
        officialPhoneNumber: [''],
        organizationName: ['']
      }),
      selfEmployee: this.fb.group({
        latestTurnover: [''],
        nameofBusiness: [''],
        natureOfBusiness: ['']
      })
    });
  }

  applyLoan() {
    let datas = this.loanForm.value;
    datas.loan.rateOfInterest = this.loanForm.getRawValue().loan.rateOfInterest;
    datas.customer.customerId = this.loanForm.getRawValue().customer.customerId;
    console.log(datas);
    this.loan.applyLoan(datas).subscribe(res => {
      let r: any = res;
      if (r.statusCode == 200 || r.statusCode == 201) {
        alert(r.message);
      } else {
        alert('error:' + r.message);
      }
      console.log(res);
    })
  }

  calculateEMI() {
    this.eligible = false;
    this.displayEligible = false;
    let loan = this.loanForm.value.loan;
    loan.rateOfInterest = this.loanForm.getRawValue().loan.rateOfInterest;
    this.loan.calculateEMI(loan).subscribe(res => {
      this.displayEligible = true;
      this.eligible = true;
      let r: any = res;
      this.loanForm.patchValue({
        loan: { emi: r.emiAmount.toFixed(2) }
      });
    });
  }

}
