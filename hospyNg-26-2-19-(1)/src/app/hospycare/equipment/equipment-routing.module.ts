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
import { LocMstComponent  } from './loc-mst/loc-mst.component';
import { LocListComponent } from './loc-list/loc-list.component';
import { PartyMstComponent } from './party-mst/party-mst.component';
import { PartyListComponent } from './party-list/party-list.component';
import { DeptMstComponent } from './dept-mst/dept-mst.component';
import { DeptListComponent } from './dept-list/dept-list.component';
const routes: Routes = [
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
  { path :'eqcallLogMst', component : EqcallLogMstComponent },
  { path: 'locMaster', component : LocMstComponent },
  
  { path:'locMaster/:id', component : LocMstComponent },
  { path: 'locList', component : LocListComponent },
  
  { path: 'partyMaster', component : PartyMstComponent },
  { path:'partyMaster/:id', component : PartyMstComponent },
  { path: 'partyList', component : PartyListComponent },

  { path: 'deptMaster', component : DeptMstComponent},
  { path:'deptMaster/:id', component : DeptMstComponent },
  { path: 'deptList', component : DeptListComponent }
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
