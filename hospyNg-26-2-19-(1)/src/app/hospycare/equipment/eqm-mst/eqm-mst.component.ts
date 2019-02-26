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
  isLoadingResults = false;

  constructor(
    private _eqpService: EpServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.eqmMst = this._eqpService.getEquipmentNull();
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id) {
        this._eqpService.getEquipmentbyId(params["id"]).subscribe(res => {
          const data = res
          this.eqmMst = data.data;
         
          this.checked = this.eqmMst.defunct === 'Y';
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
      }
      else {
        this.eqmMst = this._eqpService.getEquipmentNull();
      }
    });
  }

  onSave() {
    if (this.eqmMst.id ) {
      this._eqpService.editEquipment(this.id, this.eqmMst).subscribe(res => {

        this.isLoadingResults = false;
        this.router.navigate(["equipment/eqList"]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
    }
    else {
      this.isLoadingResults = true;
      this._eqpService.createEquipment(this.eqmMst)
        .subscribe(res => {
          this.isLoadingResults = false;
          console.log("taking da ta is = ", this.eqmMst)
          this.router.navigate(["equipment/eqList"]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }
  }

  

  // onSave() {
  //   if (this.eqmMst.id === null) {
  //     this.isLoadingResults = true;
  //     this._eqpService.createEquipment(this.eqmMst)
  //       .subscribe(res => {
  //         this.isLoadingResults = false;
  //         console.log("taking da ta is = ", this.eqmMst)
  //         this.router.navigate(["equipment/eqList"]);
  //       }, (err) => {
  //         console.log(err);
  //         this.isLoadingResults = false;
  //       });
  //   }
  //   else {
  //     this._eqpService.editEquipment(this.id, this.eqmMst).subscribe(res => {

  //       this.isLoadingResults = false;
  //       this.router.navigate(["equipment/eqList"]);
  //     }, (err) => {
  //       console.log(err);
  //       this.isLoadingResults = false;
  //     }
  //     );
  //   }
  // }
  onCancel() {
    this.router.navigate(["equipment/eqList"]);
  }

  handleChange(e) {
    if (e.checked) this.eqmMst.defunct = 'Y';
    else this.eqmMst.defunct = 'N';
  }

  hasErrors(field: any) {
    return (field.invalid && field.touched && field.errors);
  }
}
