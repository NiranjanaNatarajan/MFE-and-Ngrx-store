import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
