import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { QueryComponent } from './query/query.component';
import { QueryService } from './query/query.service';
import { SharedService } from './shared.service';
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';
import { ItemComponent } from './graph/item.component';
import { TrinketComponent } from './graph/trinket.component';
import { CharacterComponent } from './graph/character.component';

@NgModule({
    declarations: [
        AppComponent,
        QueryComponent,
        GraphComponent,
        ItemComponent,
        TrinketComponent,
        CharacterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        OverlayModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule
    ],
    providers: [
        QueryService,
        GraphService,
        SharedService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
