import { Component, OnInit } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';
import { EpServiceService } from '../epService.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-eqm-list',
  templateUrl: './eqm-list.component.html',
  styleUrls: ['./eqm-list.component.scss']
})
export class EqmListComponent implements OnInit {

  equipList : emEquipmentMst[];
  cols: any[];
  isLoadingResults = true;
  deleteId;

  constructor(private _eqpService : EpServiceService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    // this.equipList=  this._eqpService.getEquipmentList();
    this.cols = [
      { field: 'code', header: 'Equipment Code' , type : 'string' },
      { field: 'name', header: 'Equipment Name', type : 'string' },
      { field: 'modelNo', header: 'Equipment Model #', type : 'string' },
      { field: 'srNo', header: 'Equipment Serial #',type : 'number' } ,
  ];    


  this._eqpService.getEquipmentList()
  .subscribe(res => {
    this.equipList = res;
    // console.log(this.equipList);
    this.isLoadingResults = false;
  }, err => {
    console.log(err);
    this.isLoadingResults = false;
  });


  }

  onEdit(eqId:number) {
    this.router.navigate(['equipment/eqMaster', eqId]);
  }  


 onDelete(eqId:number) {
    this.deleteId = eqId;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn' , summary:'Are you sure?', detail:'Confirm to delete'});
}

 confirmDelete() {
  this.messageService.clear('c');
  this.isLoadingResults = true;
  this._eqpService.deleteEquipmentbyId(this.deleteId)
    .subscribe(res => {
      this.isLoadingResults = false;
      this.ngOnInit()
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
}

rejectDelete() {
  this.messageService.clear('c');
}



  onAdd(){
    this.router.navigate(['equipment/eqMaster']);
  }

}
