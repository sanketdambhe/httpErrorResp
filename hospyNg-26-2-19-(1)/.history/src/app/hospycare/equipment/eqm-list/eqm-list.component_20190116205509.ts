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
      { field: 'eqmCd', header: 'Code' , dtype : 'string' },
      { field: 'eqmName', header: 'Name', dtype : 'string' },
      { field: 'eqmModelNo', header: 'Model #', dtype : 'string' },
      { field: 'eqmSrNo', header: 'Serial #',dtype : 'number' } ,
      { field: '_ManName', header: 'Manifacture',dtype : 'string' },
      { field: '_venName', header: 'Vender',dtype : 'string' },
      { field: 'eqmPurDt', header: 'Purchase Date' , dtype : 'date' },
      { field: 'eqmInstlDt', header: 'Installation Date', dtype : 'date' }
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
