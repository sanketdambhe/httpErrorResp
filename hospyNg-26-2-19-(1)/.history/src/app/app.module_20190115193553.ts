import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './core/layout/main/main.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { QpMstComponent } from './hospycare/equipment/qp-mst/qp-mst.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    CommonModule,     
    AppRoutingModule,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    QpMstComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
