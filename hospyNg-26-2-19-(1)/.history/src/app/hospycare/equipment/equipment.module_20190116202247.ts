import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EqmListComponent } from './eqm-list/eqm-list.component';
import { EqmMstComponent } from './eqm-mst/eqm-mst.component';
import { EqMaintananceComponent } from './eq-maintanance/eq-maintanance.component';
import { EqInsuranceComponent } from './eq-insurance/eq-insurance.component';
import { EqBreakdownComponent } from './eq-breakdown/eq-breakdown.component';
import { EqPreventiveComponent } from './eq-preventive/eq-preventive.component';
import { EqInsuranceClaimComponent } from './eq-insurance-claim/eq-insurance-claim.component';
import { EqTransferComponent } from './eq-transfer/eq-transfer.component';
import { EqcallLogSearchComponent } from './eqcall-log-search/eqcall-log-search.component';
import { EqcallLogMstComponent } from './eqcall-log-mst/eqcall-log-mst.component';

@NgModule({
  declarations: [
    EqmListComponent,
    EqmMstComponent,
    EqMaintananceComponent,
    EqInsuranceComponent,
    EqBreakdownComponent,
    EqPreventiveComponent,
    EqInsuranceClaimComponent,
    EqTransferComponent,
    EqcallLogSearchComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    EquipmentRoutingModule,
    EqcallLogMstComponent
  ],
  exports : [   
  ]
})
export class EquipmentModule { }
