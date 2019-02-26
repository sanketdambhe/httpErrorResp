import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EqmListComponent } from './eqm-list/eqm-list.component';
import { EqmMstComponent } from './eqm-mst/eqm-mst.component';
import { EqMaintananceComponent } from './eq-maintanance/eq-maintanance.component';

@NgModule({
  declarations: [
    EqmListComponent,
    EqmMstComponent,
    EqMaintananceComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ],
  exports : [   
  ]
})
export class EquipmentModule { }
