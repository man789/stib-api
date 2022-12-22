import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviguationComponent } from './naviguation/naviguation.component';
import { StibComponent } from './stib/stib.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviguationComponent,
    StibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
