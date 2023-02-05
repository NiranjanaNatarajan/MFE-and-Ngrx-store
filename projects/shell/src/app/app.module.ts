import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// import { appReducer } from './store/app.state';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter/counter.component';
// import { CounterOutputsComponent } from './counter/counter-outputs/counter-outputs.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { counterReducer } from './counter/state/counter.reducer';
import { UserData } from 'projects/shared/src/lib/user-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CounterCanActivate } from './guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CounterComponent,
    // CounterOutputsComponent,
    CounterButtonsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(UserData),
    StoreModule.forRoot({counter: counterReducer}),
  ],
  providers: [ CounterCanActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
