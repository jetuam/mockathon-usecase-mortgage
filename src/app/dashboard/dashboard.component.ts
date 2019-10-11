import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeTab: String;
  loans: any = [];
  profile = {};
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.activeTab = 'profile';
    if (this.loginService.isUserLoggedIn.value.loanDetails) {
      this.loans = this.loginService.isUserLoggedIn.value.loanDetails;

      let loan = this.loans[0];

      this.profile = {
        Name: `${loan.firstName} ${loan.lastName}`,
        EmailId: loan.emailId,
        MobileNo: loan.mobileNo
      };
    }
  }

  tabOpen(tab) {
    $('#' + tab).tab('show');
  }

}
