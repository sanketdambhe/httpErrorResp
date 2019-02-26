import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { EqmListComponent } from './hospycare/equipment/eqm-list/eqm-list.component';
// import { EqmMstComponent } from './hospycare/equipment/eqm-mst/eqm-mst.component';
// import { EqMaintananceComponent } from './hospycare/equipment/eq-maintanance/eq-maintanance.component';
// import { EqInsuranceComponent } from './hospycare/equipment/eq-insurance/eq-insurance.component';
// import { EqBreakdownComponent } from './hospycare/equipment/eq-breakdown/eq-breakdown.component';
// import { EqPreventiveComponent  } from './hospycare/equipment/eq-preventive/eq-preventive.component';
// import { EqInsuranceClaimComponent } from './hospycare/equipment/eq-insurance-claim/eq-insurance-claim.component';
// import { EqTransferComponent } from './hospycare/equipment/eq-transfer/eq-transfer.component';  
// import { EqcallLogSearchComponent } from './hospycare/equipment/eqcall-log-search/eqcall-log-search.component';
// import { EqcallLogMstComponent } from './hospycare/equipment/eqcall-log-mst/eqcall-log-mst.component';

const routes: Routes = [
  // { path:'eqList', component : EqmListComponent },
  // { path:'eqMaster', component : EqmMstComponent },
  // { path:'eqMaintanance', component : EqMaintananceComponent },
  // { path:'eqInsurance', component : EqInsuranceComponent },
  // { path:'eqBreakdown', component : EqBreakdownComponent },
  // { path:'eqPreventive', component : EqPreventiveComponent },
  // { path :'eqInsuranceClaim', component : EqInsuranceClaimComponent },
  // { path :'eqTransfer', component : EqTransferComponent },
  // { path :'eqcallLogSearch', component : EqcallLogSearchComponent },
  // { path :'eqcallLogMst', component : EqcallLogMstComponent }
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
