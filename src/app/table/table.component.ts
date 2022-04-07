import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  dateofbirth: string;
  effectivedate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', dateofbirth: '', effectivedate: 'H'},
  {position: 2, name: 'Helium', dateofbirth: '', effectivedate: 'He'},
 
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'dateofbirth', 'effectivedate'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}