import { Component, OnInit } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';
import { EpServiceService } from '../epService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eqm-list',
  templateUrl: './eqm-list.component.html',
  styleUrls: ['./eqm-list.component.scss']
})
export class EqmListComponent implements OnInit {

  equipList : emEquipmentMst[];

  constructor(private _eqpService : EpServiceService,
    private router: Router) { }

  ngOnInit() {
    this.equipList=  this._eqpService.getEquipmentList();
  }

  onEdit(eqMst:emEquipmentMst) {
    this.router.navigate(['eqMaster', eqMst.eqmId]);
  }  
}
