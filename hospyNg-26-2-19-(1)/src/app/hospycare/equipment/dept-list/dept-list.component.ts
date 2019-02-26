import { Component, OnInit } from '@angular/core';
import { dmDepartmentMst } from '../deptInterfaces';
import { DeptServiceService } from '../deptService.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.scss']
})
export class DeptListComponent implements OnInit {

  deptList: dmDepartmentMst[];
  cols: any[];
  isLoadingResults = true;
  deleteId;
   

  
  constructor(private _deptService: DeptServiceService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'code', header: 'Department Code', type: 'string' },
      { field: 'name', header: 'Department Name', type: 'string' },
      { field: 'type', header: 'Department Type', type: 'string' },
      { field: 'storeLocId', header: 'Department  storeLocId', type: 'string' },
      { field: 'aprvlGroup', header: 'Department aprvlGroup', type: 'string' }
    ];

    this._deptService.getDepartmentList()
      .subscribe(res => {
        this.deptList = res;
        console.log(this.deptList);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

      
  }

  onEdit(deptId: number) {
    this.router.navigate(['equipment/deptMaster', deptId]);
  }

  
 onDelete(deptId: number) {
  this.deleteId = deptId;
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn' , summary:'Are you sure?', detail:'Confirm to delete'});
}

confirmDelete() {
this.messageService.clear('c');
this.isLoadingResults = true;
this._deptService.deleteDepartmentbyId(this.deleteId)
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

  onAdd() {
    this.router.navigate(['equipment/deptMaster']);
  }

}
