import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from "./app-routing.module";

import { MainComponent } from './core/layout/main/main.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { FooterComponent } from './core/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,   
    CommonModule,    
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
