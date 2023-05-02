import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

import { QueryComponent } from './query/query.component';
import { QueryService } from './query/query.service';
import { SharedService } from './shared.service';
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';

@NgModule({
    declarations: [
        AppComponent,
        QueryComponent,
        GraphComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        OverlayModule
    ],
    providers: [
        QueryService,
        GraphService,
        SharedService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
