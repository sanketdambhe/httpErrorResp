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
      { field: 'eqmCd', header: 'Code' , type : 'string' },
      { field: 'eqmName', header: 'Name', type : 'string' },
      { field: 'eqmModelNo', header: 'Model #', type : 'string' },
      { field: 'eqmSrNo', header: 'Serial #',type : 'number' } ,
      { field: '_ManName', header: 'Manifacture',type : 'string' },
      { field: '_venName', header: 'Vender',type : 'string' },
      { field: 'eqmPurDt', header: 'Purchase Date' , type : 'date' },
      { field: 'eqmInstlDt', header: 'Installation Date', type : 'date' }
  ];    
  }

  onEdit(eqId:number) {
    this.router.navigate(['equipment/eqMaster', eqId]);
  }  

  onDelete(eqId:number) {
    this._eqpService.deleteEquipmentbyId(eqId);
    this.equipList=  this._eqpService.getEquipmentList();
  }  
  onAdd(){
    this.router.navigate(['equipment/eqMaster']);
  }

}
