import { Component, OnInit } from '@angular/core';

export interface CardActivity {
  chargedBy: string;
  date: string;
  charge: number;
  status: boolean;
}

const ELEMENT_DATA: CardActivity[] = [
  {date: '08/23/21', chargedBy: 'Netflix', charge: 10.99, status: true},
  {date: '07/01/21', chargedBy: 'Amazon', charge: 12.99, status: true},
  {date: '07/01/21', chargedBy: 'Arlington Developers LLC', charge: 1995, status: true},
  {date: '06/30/21', chargedBy: 'PSEG', charge: 37, status: true},
  {date: '06/14/21', chargedBy: 'Conservice', charge: 9, status: true},
  {date: '06/10/21', chargedBy: 'Arlington Developers LLC', charge: 1995, status: false},
  {date: '06/09/21', chargedBy: 'Pornhub', charge: 20000, status: false},
  {date: '06/07/21', chargedBy: 'Ubisoft', charge: 1100, status: true},
  {date: '06/04/21', chargedBy: 'Costco', charge: 500, status: false},
  {date: '06/01/21', chargedBy: 'Shop n Shop', charge: 85, status: false},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'chargedBy', 'charge', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
