import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QueryComponent } from './query/query.component';
import { ManageComponent } from './manage/manage.component';
import { QueryService } from './query/query.service';
import { ManageService } from './manage/manage.service';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    QueryService,
    ManageService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
