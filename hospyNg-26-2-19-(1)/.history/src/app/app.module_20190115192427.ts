import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/layout/main/main.component';
import { QpMstComponent } from './hospycare/equipment/qp-mst/qp-mst.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { FooterComponent } from './core/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QpMstComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,   
    CommonModule,     
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
