import { Component, OnInit, Input } from '@angular/core';
import { emEquipmentMst } from '../eqInterfaces';
import { EpServiceService } from '../epService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eqm-mst',
  templateUrl: './eqm-mst.component.html',
  styleUrls: ['./eqm-mst.component.scss']
})
export class EqmMstComponent implements OnInit {

  eqmMst : emEquipmentMst;
  id : number;

  constructor(private _eqpService : EpServiceService, 
    private router : Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id)
      {
        this.eqmMst = this._eqpService.getEquipmentbyId(1,1,params['id']);
      }
      else{
        this.eqmMst = this._eqpService.getEquipmentNull(1,1);
      }      
    });    
  }

  onSave (){
    if (this.eqmMst.eqmId === -1) 
    this._eqpService.createEquipment(1,1,this.eqmMst);
    else this._eqpService.editEquipment(1,1,this.id,this.eqmMst);
    this.router.navigate(['eqList']);
  }
  onCancel (){
    this.router.navigate(['eqList']);
  }

}
