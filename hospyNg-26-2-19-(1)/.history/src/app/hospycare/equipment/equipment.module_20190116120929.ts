import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EqmListComponent } from './eqm-list/eqm-list.component';
import { EqmMstComponent } from './eqm-mst/eqm-mst.component';

@NgModule({
  declarations: [
    EqmListComponent,
    EqmMstComponent],
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ],
  exports : [
    EqmListComponent,
    EqmMstComponent
  ]
})
export class EquipmentModule { }
