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
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.activeTab = 'profile';
    if (this.loginService.isUserLoggedIn.value.loanDetails) {
      this.loans = this.loginService.isUserLoggedIn.value.loanDetails;
    }
  }

  tabOpen(tab) {
    $('#' + tab).tab('show');
  }

}
