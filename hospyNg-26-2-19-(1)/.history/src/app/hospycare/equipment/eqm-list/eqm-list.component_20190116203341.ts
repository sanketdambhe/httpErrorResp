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
  cols: any[];

  constructor(private _eqpService : EpServiceService,
    private router: Router) { }

  ngOnInit() {
    this.equipList=  this._eqpService.getEquipmentList();
    this.cols = [
      { field: 'eqmCd', header: 'Code' },
      { field: 'eqmName', header: 'Name' },
      { field: 'eqmModelNo', header: 'Model #' },
      { field: 'eqmSrNo', header: 'Serial #' } ,
      { field: '_ManName', header: 'Manifacture' },
      { field: '_venName', header: 'Vender' },
      { field: 'eqmPurDt', header: 'Purchase Date' },
      { field: 'eqmInstlDt', header: 'Installation Date' }
  ];    
  }

  onEdit(eqId:number) {
    this.router.navigate(['eqMaster', eqId]);
  }  

  onDelete(eqId:number) {
    this._eqpService.deleteEquipmentbyId(eqId);
    this.equipList=  this._eqpService.getEquipmentList();
  }  
}
