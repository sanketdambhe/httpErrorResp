import { Component, OnInit, ViewChild  } from "@angular/core";
import { pmPartyMst } from "../partyInterfaces";
import { partyServiceService } from "../partyService.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-party-mst',
  templateUrl: './party-mst.component.html',
  styleUrls: ['./party-mst.component.css']
})
export class PartyMstComponent implements OnInit {
  partyMst: pmPartyMst;
  id: number;
  checked: boolean = false;
  checkedIssue: boolean = false;
  checkedTransfer: boolean = false;
  isLoadingResults = false;
  // cars: SelectItem[];
  
  types = [
      {label: 'Stores', value: 's'},
      {label: 'Pharmacy', value: 'p'},
      {label: 'Department', value: 'd'},
    ];

  constructor(  private _partyService: partyServiceService,
                private router: Router,
                private route: ActivatedRoute)
         {
           
         }

  ngOnInit() {
    this.partyMst = this. _partyService.getPartyNull();
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id){
       this. _partyService.getPartybyId(params["id"]).subscribe(res => {
        const data = res
        this.partyMst = data.data;

          this.checked = this.partyMst.defunct==='Y';
          // this.checkedIssue = this.partyMst.allowIssue==='Y';
          // this.checkedTransfer = this.partyMst.allowTransfer==='Y';
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
      }
      else {
  this.partyMst = this. _partyService.getPartyNull();
}});
}

// onSave(){
//   console.log("sent data is =", this.partyMst)
//       this.isLoadingResults = true;
//     this._partyService.createLocation (this.partyMst)
//       .subscribe(res => {
//           this.isLoadingResults = false;
//           this.router.navigate(["equipment/locList"]);
//         }, (err) => {
//           console.log(err);
//           this.isLoadingResults = false;
//         });
// }


onSave() {
  if (this.partyMst.id === null ) 
{
  this.isLoadingResults = true;
  this._partyService.createParty (this.partyMst)
  .subscribe(res => {
      this.isLoadingResults = false;
      console.log("taking da ta is = ", this.partyMst)
      this.router.navigate(["equipment/partyList"]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
}

  else
{
  this._partyService.updateParty(this.id, this.partyMst)    .subscribe(res => {
    let id = res['_id'];
    this.isLoadingResults = false;
    this.router.navigate(["equipment/partyList"]);
  }, (err) => {
    console.log(err);
    this.isLoadingResults = false;
  }
);
}

}

  onCancel() {
    this.router.navigate(["equipment/partyList"]);
  }

  handleChange(e) {    
    if (e.checked) this.partyMst.defunct='Y';
    else this.partyMst.defunct='N';
  }

  handleIssue(e) {    
    // if (e.checked) this.partyMst.allowIssue='Y';
    // else this.partyMst.allowIssue='N';
  }

  handleTrasnfer(e) {    
    // if (e.checked) this.partyMst.allowTransfer='Y';
    // else this.partyMst.allowTransfer='N';
  }
  // handleType(e) {    
  //   if (e.checked) this.partyMst.type='Y';
  //   else this.partyMst.type='N';
  // }

  hasErrors(field: any) {
    return (field.invalid && field.touched && field.errors);
}
}
