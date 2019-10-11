import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HeadingComponent } from './core/heading/heading.component';
import { BannerComponent } from './core/banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './core/alert/alert.component';
import { LoansComponent } from './loans/loans.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { DynamicTableComponent } from './core/dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HeadingComponent,
    BannerComponent,
    DashboardComponent,
    AlertComponent,
    LoansComponent,
    ApplyLoanComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
