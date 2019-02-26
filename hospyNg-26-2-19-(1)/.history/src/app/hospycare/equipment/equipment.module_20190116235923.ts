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
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
    EqcallLogMstComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EquipmentRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    AutoCompleteModule,
    InputSwitchModule,
    CalendarModule,
    TabViewModule,
    ToolbarModule,
    PanelModule,
    ConfirmDialogModule
  ],
  exports : [   
  ]
})
export class EquipmentModule { }
