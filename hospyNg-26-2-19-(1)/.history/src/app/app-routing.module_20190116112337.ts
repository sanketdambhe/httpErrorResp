import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqmListComponent } from './hospycare/equipment/eqm-list/eqm-list.component';
import { EqmMstComponent } from './hospycare/equipment/eqm-mst/eqm-mst.component';


const routes: Routes = [
  { path:'eqList', component : EqmListComponent},
  { path:'eqMaster', component : EqmMstComponent}
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
