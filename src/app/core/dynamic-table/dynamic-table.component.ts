import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() datas;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
    console.log(this.datas)
  }

}
