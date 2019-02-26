import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqmListComponent } from './eqm-list/eqm-list.component';
import { EqmMstComponent } from './eqm-mst/eqm-mst.component';
import { EqMaintananceComponent } from './eq-maintanance/eq-maintanance.component';
import { EqInsuranceComponent } from './eq-insurance/eq-insurance.component';
import { EqBreakdownComponent } from './eq-breakdown/eq-breakdown.component';
import { EqPreventiveComponent  } from './eq-preventive/eq-preventive.component';
import { EqInsuranceClaimComponent } from './eq-insurance-claim/eq-insurance-claim.component';
import { EqTransferComponent } from './eq-transfer/eq-transfer.component';  
import { EqcallLogSearchComponent } from './eqcall-log-search/eqcall-log-search.component';
import { EqcallLogMstComponent } from './eqcall-log-mst/eqcall-log-mst.component';

const routes: Routes = [
  { path:'', component : EqmListComponent },
  { path:'eqList', component : EqmListComponent },
  { path:'eqMaster', component : EqmMstComponent },
  { path:'eqMaster/:id', component : EqmMstComponent },
  { path:'eqMaintanance', component : EqMaintananceComponent },
  { path:'eqInsurance', component : EqInsuranceComponent },
  { path:'eqBreakdown', component : EqBreakdownComponent },
  { path:'eqPreventive', component : EqPreventiveComponent },
  { path :'eqInsuranceClaim', component : EqInsuranceClaimComponent },
  { path :'eqTransfer', component : EqTransferComponent },
  { path :'eqcallLogSearch', component : EqcallLogSearchComponent },
  { path :'eqcallLogMst', component : EqcallLogMstComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
