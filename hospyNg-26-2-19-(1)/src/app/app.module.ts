import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from "./app-routing.module";





@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule,
    CommonModule,    
    FormsModule,
    HttpClientModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
