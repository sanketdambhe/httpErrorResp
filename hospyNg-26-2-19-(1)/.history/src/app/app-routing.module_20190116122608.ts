import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqmListComponent } from './hospycare/equipment/eqm-list/eqm-list.component';
import { EqmMstComponent } from './hospycare/equipment/eqm-mst/eqm-mst.component';
import { EqMaintananceComponent } from './hospycare/equipment/eq-maintanance/eq-maintanance.component';
import { EqInsuranceComponent } from './hospycare/equipment/eq-insurance/eq-insurance.component';
import { EqBreakdownComponent } from './hospycare/equipment/eq-breakdown/eq-breakdown.component';


const routes: Routes = [
  { path:'eqList', component : EqmListComponent },
  { path:'eqMaster', component : EqmMstComponent },
  { path:'eqMaintanance', component : EqMaintananceComponent },
  { path:'eqInsurance', component : EqInsuranceComponent },
  { path:'eqBreakdown', component : EqBreakdownComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
    ]
})
export class AppRoutingModule { }
