import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedIn = new BehaviorSubject<any>(this.getUser);

  constructor(
    private http: HttpClient
  ) { }

  get watchUser() {
    return this.isUserLoggedIn.asObservable();
  }

  set setUser(data) {
    localStorage.setItem('login', JSON.stringify(data));
  }

  get getUser() {
    return JSON.parse(localStorage.getItem('login'));
  }

  login = (login: Login) => {
    return this.http.post(`${environment.apiDomainUrl}/loans/login`, login);
  }

  logOut = () => {
    localStorage.removeItem('login');
    this.isUserLoggedIn.next(null);
  }
}
