import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeriodicTableComponent } from '../periodic-table/periodic-table.component';
import { BohrModelComponent } from '../bohr-model/bohr-model.component';

@NgModule({
declarations: [
    AppComponent,
    PeriodicTableComponent,
    BohrModelComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }