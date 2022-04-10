import { Component } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Expenses Tracker';
  user: User = {
    firstName: "Adam",
    lastName: "Connolly"
  }

  userIcon: IconDefinition = faUser
  squareIcon: IconDefinition = faSquare

}
