import { Component, OnInit } from '@angular/core';
import { lmLocationMst } from '../locInterfaces';
import { LocServiceService } from '../locService.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-loc-list',
  templateUrl: './loc-list.component.html',
  styleUrls: ['./loc-list.component.scss']
})
export class LocListComponent implements OnInit {

  locList: lmLocationMst[];
  cols: any[];
  isLoadingResults = true;
  deleteId;

  constructor(private _locService: LocServiceService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    // this.locList=  this._locService.getLocationList();
    this.cols = [
      { field: 'code', header: 'Location Code', type: 'string' },
      { field: 'name', header: 'Location Name', type: 'string' },
      { field: 'mobile', header: 'Location Mobile', type: 'string' },
      { field: 'email', header: 'Location  Email id', type: 'string' },
      { field: 'address', header: 'Location Address', type: 'string' }
    ];

    this._locService.getLocationList()
      .subscribe(res => {
        this.locList = res;
        console.log(this.locList);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onEdit(locId: number) {
    this.router.navigate(['equipment/locMaster', locId]);
  }


 onDelete(locId:number) {
  this.deleteId = locId;
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn' , summary:'Are you sure?', detail:'Confirm to delete'});
}

confirmDelete() {
this.messageService.clear('c');
this.isLoadingResults = true;
this._locService.deleteLocationbyId(this.deleteId)
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
    this.router.navigate(['equipment/locMaster']);
  }

}
