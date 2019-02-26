import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CommonModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
