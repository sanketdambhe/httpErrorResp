import { Component, OnInit } from '@angular/core';
import { pmPartyMst } from '../partyInterfaces';
import { partyServiceService } from '../partyService.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent implements OnInit {

  partyList: pmPartyMst[];
  cols: any[];
  isLoadingResults = true;
  deleteId;


  constructor(private _partyService: partyServiceService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    // this.partyList=  this._partyService.getLocationList();
    this.cols = [
      { field: 'code', header: 'Party Code', type: 'string' },
      { field: 'name', header: 'Party Name', type: 'string' },
      { field: 'mobile', header: 'Party Mobile', type: 'string' },
      { field: 'email', header: 'Party  Email', type: 'string' },
      { field: 'address', header: 'Party Address', type: 'string' },
      { field: 'contactPerson', header: 'Contact Person', type: 'string' }
    ];

    this._partyService.getPartyList()
      .subscribe(res => {
        this.partyList = res;
        console.log(this.partyList);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onEdit(locId: number) {
    this.router.navigate(['equipment/partyMaster', locId]);
  }


  onDelete(partyId:number) {
    this.deleteId = partyId;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn' , summary:'Are you sure?', detail:'Confirm to delete'});
  }
  
  confirmDelete() {
  this.messageService.clear('c');
  this.isLoadingResults = true;
  this._partyService.deletePartybyId(this.deleteId)
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
    this.router.navigate(['equipment/partyMaster']);
  }

}
