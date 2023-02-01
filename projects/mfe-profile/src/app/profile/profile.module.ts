import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    ProfileComponent,
    // HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
