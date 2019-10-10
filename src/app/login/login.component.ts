import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: Login;
  loginForm: FormGroup;
  submitted: boolean = false;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    /**
     * Redirection if user logged in
     */
    if (this.loginService.isUserLoggedIn.value) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * Login with crediantials
   * 
   * @var emailId:String
   * @var password:String
   */
  onLogin = () => {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.subscription = this.loginService.login(this.loginForm.value).subscribe(res => {
        this.loginService.setUser = res;
        this.loginService.isUserLoggedIn.next(this.loginService.getUser);
        this.router.navigate(['/dashboard']);
      });
    }
  }

  /**
   * destroy subcription of login/logout watcher
   */
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
