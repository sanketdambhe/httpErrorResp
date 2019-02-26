import { Component, OnInit } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';

@Component({
  selector: 'app-eqm-mst',
  templateUrl: './eqm-mst.component.html',
  styleUrls: ['./eqm-mst.component.scss']
})
export class EqmMstComponent implements OnInit {

  eqmMst : emEquipmentMst;

  constructor() { }

  ngOnInit() {
  }

}
