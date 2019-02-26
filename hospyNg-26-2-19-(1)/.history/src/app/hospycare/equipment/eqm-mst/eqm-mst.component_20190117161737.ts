import { Component, OnInit } from "@angular/core";
import { emEquipmentMst } from "../eqInterfaces";
import { EpServiceService } from "../epService.service";
import { ActivatedRoute, Router } from "@angular/router";
//import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: "app-eqm-mst",
  templateUrl: "./eqm-mst.component.html",
  styleUrls: ["./eqm-mst.component.scss"]
})
export class EqmMstComponent implements OnInit {
  eqmMst: emEquipmentMst;
  id: number;
  checked: boolean = false;

  constructor(
    private _eqpService: EpServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id)
        this.eqmMst = this._eqpService.getEquipmentbyId(params["id"]);
      else this.eqmMst = this._eqpService.getEquipmentNull();
    });
  }

  onSave() {
    if (this.eqmMst.eqmId === -1) this._eqpService.createEquipment(this.eqmMst);
    else this._eqpService.editEquipment(this.id, this.eqmMst);
    this.router.navigate(["equipment/eqList"]);
  }
  onCancel() {
    this.router.navigate(["equipment/eqList"]);
  }
}
