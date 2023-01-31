import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
