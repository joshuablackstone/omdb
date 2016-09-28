import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { OmDbComponent }  from './omdb/omdb.component';
import { OmDbDetailsComponent } from './omdb/omdb.details.component';
import { routing, appRoutingProviders }  from './app.routing';

import {OmDbService} from './omdb/omdb.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing ],
  declarations: [ AppComponent, OmDbComponent, OmDbDetailsComponent ],
  providers: [OmDbService, appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
