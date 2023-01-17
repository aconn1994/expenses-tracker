import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { faUser, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

interface User {
  firstName: string;
  lastName: string;
}

interface AccountProgress {
  progressValue: number;
  accountValue: number;
  accountName: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Expenses Tracker';
  userIcon: IconDefinition = faUser
  squareIcon: IconDefinition = faSquare
  accountsProgress: AccountProgress[]

  yearlyPreTax: number
  yearlyAfterTax: number
  monthly: number
  leftover: number

  user: User = {
    firstName: "Adam",
    lastName: "Connolly"
  }

  constructor() {
    this.yearlyPreTax = 105000
    this.yearlyAfterTax = 70501.08
    this.monthly = 5875.09
    this.leftover = 760.09
    this.accountsProgress = [
      {
        progressValue: 60,
        accountValue: 2365,
        accountName: 'Rent',
        color: 'accent'
      }, {
        progressValue: 80,
        accountValue: 250,
        accountName: 'Utilities',
        color: 'warn'
      }, {
        progressValue: 80,
        accountValue: 700,
        accountName: 'Food',
        color: 'warn'
      }, {
        progressValue: 80,
        accountValue: 100,
        accountName: 'Medical',
        color: 'warn'
      }, {
        progressValue: 80,
        accountValue: 200,
        accountName: 'Transportation',
        color: 'warn'
      }, {
        progressValue: 80,
        accountValue: 500,
        accountName: 'Other',
        color: 'warn'
      }, {
        progressValue: 80,
        accountValue: 1000,
        accountName: 'Savings',
        color: 'warn'
      },
    ]
  }

}
