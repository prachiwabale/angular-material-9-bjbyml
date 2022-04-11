import { Component, OnInit } from '@angular/core';

export interface TableElement {
  emptydata1:string;
  position: number;
  name: string;
  dateofbirth: string;
  effectivedate: string;
}

const ELEMENT_DATA: TableElement[] = [
  {
    emptydata1:'',
    position: 1,
    name: 'Vrunda',
    dateofbirth: '07-04-2022',
    effectivedate: '07-04-2022',
  },
  {
    emptydata1:'',
    position: 2,
    name: 'Prachi',
    dateofbirth: '15-04-2022',
    effectivedate: '15-04-2022',
  },
];

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css'],
})
export class Table1Component implements OnInit {
  displayedColumns: string[] = [
    'emptydata1',
    'position',
    'name',
    'dateofbirth',
    'effectivedate',
  ];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = [
    'emptydata1',
    'name',
    'dateofbirth',
    'effectivedate',
    'gender',
  ];
  constructor() {}

  ngOnInit() {}
}
