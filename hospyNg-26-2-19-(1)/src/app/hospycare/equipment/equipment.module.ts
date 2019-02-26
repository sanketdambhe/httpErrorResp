import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimefacesModule } from '../../core/modules/primefaces.module';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { HttpClientModule } from '@angular/common/http';
import { LocMstComponent } from './loc-mst/loc-mst.component'; 
import { LocListComponent } from './loc-list/loc-list.component';
import { PartyMstComponent } from './party-mst/party-mst.component';
import { PartyListComponent } from './party-list/party-list.component';
import { DeptMstComponent } from './dept-mst/dept-mst.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

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
    EqcallLogSearchComponent,
    EqcallLogMstComponent,
    LocMstComponent,
    LocListComponent,
    PartyMstComponent,
    PartyListComponent,
    DeptMstComponent,
    DeptListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    PrimefacesModule,
    EquipmentRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    DropdownModule,
    ToastModule
  ],
  exports : [     
    FlexLayoutModule
  ],
  providers: [MessageService],
})
export class EquipmentModule { }
