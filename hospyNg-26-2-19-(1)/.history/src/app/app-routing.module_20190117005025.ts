import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { EqmListComponent } from './hospycare/equipment/eqm-list/eqm-list.component';


const routes: Routes = [
  // { path:'eqList', component : EqmListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'EquipmentModule', loadChildren: './hospycare/equipment/equipment.module#EquipmentModule' }  
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
