import { Component, OnInit } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';

@Component({
  selector: 'app-eqm-list',
  templateUrl: './eqm-list.component.html',
  styleUrls: ['./eqm-list.component.scss']
})
export class EqmListComponent implements OnInit {

  equipList : emEquipmentMst[] = [];

  constructor() { }

  ngOnInit() {
  }

}
