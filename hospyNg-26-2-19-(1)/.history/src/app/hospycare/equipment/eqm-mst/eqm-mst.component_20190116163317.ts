import { Component, OnInit, Input } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';
import { EpServiceService } from '../epService.service';

@Component({
  selector: 'app-eqm-mst',
  templateUrl: './eqm-mst.component.html',
  styleUrls: ['./eqm-mst.component.scss']
})
export class EqmMstComponent implements OnInit {

  @Input()
  eqmMst : emEquipmentMst;

  constructor() { }

  ngOnInit() {
  }

}
