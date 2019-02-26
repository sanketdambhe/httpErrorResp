import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    AutoCompleteModule,
    InputSwitchModule,
    CalendarModule,
    TabViewModule,
    ToolbarModule,
    PanelModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    ToastModule,
    BlockUIModule
  ],
  exports : [    
    TableModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    AutoCompleteModule,
    InputSwitchModule,
    CalendarModule,
    TabViewModule,
    ToolbarModule,
    PanelModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    ToastModule,
    BlockUIModule
  ]
})
export class PrimefacesModule { }
