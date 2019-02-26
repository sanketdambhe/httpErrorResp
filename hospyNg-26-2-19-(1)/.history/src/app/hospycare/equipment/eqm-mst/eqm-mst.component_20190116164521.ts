import { Component, OnInit, Input } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';
import { EpServiceService } from '../epService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eqm-mst',
  templateUrl: './eqm-mst.component.html',
  styleUrls: ['./eqm-mst.component.scss']
})
export class EqmMstComponent implements OnInit {

  eqmMst : emEquipmentMst;

  constructor(private _eqpService : EpServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('id is ' + params['id']);
      this.eqmMst = this._eqpService.getEquipmentbyId(1,1,1);
    });
    
  }

}
