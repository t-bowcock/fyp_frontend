import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { QueryComponent } from './query/query.component';
import { ManageComponent } from './manage/manage.component';
import { QueryService } from './query/query.service';
import { ManageService } from './manage/manage.service';
import { SharedService } from './shared.service';



@NgModule({
    declarations: [
        AppComponent,
        QueryComponent,
        ManageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatTabsModule,
    ],
    providers: [
        QueryService,
        ManageService,
        SharedService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
