import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // BrowserModule,
    // HttpClientModule,
    // HttpClient,
    // HttpModule,
    ReactiveFormsModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
