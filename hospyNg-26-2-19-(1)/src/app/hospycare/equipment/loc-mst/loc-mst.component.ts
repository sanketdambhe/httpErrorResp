import { Component, OnInit, ViewChild  } from "@angular/core";
import { lmLocationMst } from "../locInterfaces";
import { LocServiceService } from "../locService.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-loc-mst',
  templateUrl: './loc-mst.component.html',
  styleUrls: ['./loc-mst.component.css']
})
export class LocMstComponent implements OnInit {
  locMst: lmLocationMst;
  id: number;
  checked: boolean = false;
  checkedIssue: boolean = false;
  checkedTransfer: boolean = false;
  isLoadingResults = false;
  
  types = [
      {label: 'Stores', value: 's'},
      {label: 'Pharmacy', value: 'p'},
      {label: 'Department', value: 'd'},
    ];

  constructor(  private _locService: LocServiceService,
                private router: Router,
                private route: ActivatedRoute)
         {
           
         }

  ngOnInit() {
    this.locMst = this. _locService.getLocationNull();
    this.route.params.subscribe(params => {
      this.id = params["id"];
      
      if (this.id){
       this. _locService.getLocationbyId(params["id"]).subscribe(res => {
         const data = res
          this.locMst = data.data;

          console.log("sanket sanket",this.locMst)
          this.checked = this.locMst.defunct==='Y';
          this.checkedIssue = this.locMst.allowIssue==='Y';
          this.checkedTransfer = this.locMst.allowTransfer==='Y';
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
      }
      else {
  this.locMst = this. _locService.getLocationNull();
}});
}



onSave() {
  if (this.locMst.id === null ) 
{
  this.isLoadingResults = true;
  this._locService.createLocation (this.locMst)
  .subscribe(res => {
      this.isLoadingResults = false;
      console.log("taking da ta is = ", this.locMst)
      this.router.navigate(["equipment/locList"]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
}
  else{
  this._locService.updateProduct(this.id, this.locMst)    .subscribe(res => {
    let id = res['_id'];
    this.isLoadingResults = false;
    this.router.navigate(["equipment/locList"]);
  }, (err) => {
    console.log(err);
    this.isLoadingResults = false;
  }
);
}
}

  onCancel() {
    this.router.navigate(["equipment/locList"]);
  }

  handleChange(e) {    
    if (e.checked) this.locMst.defunct='Y';
    else this.locMst.defunct='N';
  }

  handleIssue(e) {    
    if (e.checked) this.locMst.allowIssue='Y';
    else this.locMst.allowIssue='N';
  }

  handleTrasnfer(e) {    
    if (e.checked) this.locMst.allowTransfer='Y';
    else this.locMst.allowTransfer='N';
  }
  // handleType(e) {    
  //   if (e.checked) this.locMst.type='Y';
  //   else this.locMst.type='N';
  // }

  hasErrors(field: any) {
    return (field.invalid && field.touched && field.errors);
}
}
