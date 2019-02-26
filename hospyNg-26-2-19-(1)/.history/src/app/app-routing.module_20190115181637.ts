import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {eqMast} from './hospycare/equipment/qp-mst/qp-mst.component';

const routes: Routes = [{
  path:'eqMast', component:eqMast
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, HttpClientModule]
})
export class AppRoutingModule { }
