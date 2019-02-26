import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QpMstComponent} from './hospycare/equipment/qp-mst/qp-mst.component';


const routes: Routes = [{
  path:'eqMast', component : QpMstComponent, pathMatch :'full'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
    ]
})
export class AppRoutingModule { }
