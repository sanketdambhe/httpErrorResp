import { Component, OnInit, ViewChild } from "@angular/core";
import { dmDepartmentMst } from "../deptInterfaces";
import { DeptServiceService } from "../deptService.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-dept-mst',
  templateUrl: './dept-mst.component.html',
  styleUrls: ['./dept-mst.component.css']
})
export class DeptMstComponent implements OnInit {
  deptMst: dmDepartmentMst;
  id: number;
  checked: boolean = false;
  isLoadingResults = false;

  types = [
    { label: 'Speciality', value: 's' },
    { label: 'Department', value: 'd' },
  ];

  constructor(private _deptService: DeptServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.deptMst = this._deptService.getDepartmentNull();
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id) {
        this._deptService.getDepartmentbyId(params["id"]).subscribe(res => {
          const data = res
          this.deptMst = data.data;

          this.checked = this.deptMst.defunct === 'Y';
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
      }
      else {
        this.deptMst = this._deptService.getDepartmentNull();
      }
    });
  }



  onSave() {
    if (this.deptMst.id === null) {
      this.isLoadingResults = true;
      this._deptService.createDepartment(this.deptMst)
        .subscribe(res => {
          this.isLoadingResults = false;
          console.log("taking da ta is = ", this.deptMst)
          this.router.navigate(["equipment/deptList"]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }

    else {
      this._deptService.updateDepartment(this.id, this.deptMst).subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(["equipment/deptList"]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
    }

  }

  onCancel() {
    this.router.navigate(["equipment/deptList"]);
  }

  handleChange(e) {
    if (e.checked) this.deptMst.defunct = 'Y';
    else this.deptMst.defunct = 'N';
  }


  hasErrors(field: any) {
    return (field.invalid && field.touched && field.errors);
  }
}
