import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {QpMstComponent} from './hospycare/equipment/qp-mst/qp-mst.component';
import { MainComponent } from './core/layout/main/main.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { FooterComponent } from './core/layout/footer/footer.component';

const routes: Routes = [{
  path:'eqMast', component : QpMstComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainComponent,
    SidebarComponent,
    FooterComponent,
    QpMstComponent
  ],
  exports: [
    RouterModule, 
    FormsModule, 
    HttpClientModule
    ]
})
export class AppRoutingModule { }
