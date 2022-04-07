import { Component, OnInit } from '@angular/core';

export interface interactivetablewithicon {
  name: string;
  dateofbirth: string;
  effectivedate: string;
  gender: string;
}

const INTERCTIVE_TABLE_DATA: interactivetablewithicon[] = [
  {
    name: 'Prachi Wabale',
    dateofbirth: '20-Sep-2011',
    effectivedate: '13-Sep-2020',
    gender: 'F',
  },

  {
    name: 'Prachi Wabale',
    dateofbirth: '20-Sep-2011',
    effectivedate: '13-Sep-2020',
    gender: 'F',
  },
];
@Component({
  selector: 'app-interactivetable',
  templateUrl: './interactivetable.component.html',
  styleUrls: ['./interactivetable.component.css']
})

export class InteractivetableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'dateofbirth',
    'effectivedate',
    'gender',
  ];

  dataSource = INTERCTIVE_TABLE_DATA;

  constructor() { }

  ngOnInit() {
  }

}