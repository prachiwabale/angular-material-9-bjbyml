import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  dateofbirth: string;
  effectivedate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Abc',
    dateofbirth: '07-04-2022',
    effectivedate: '07-04-2022',
  },
  {
    position: 2,
    name: 'Pqq',
    dateofbirth: '15-04-2022',
    effectivedate: '15-04-2022',
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'dateofbirth',
    'effectivedate',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
