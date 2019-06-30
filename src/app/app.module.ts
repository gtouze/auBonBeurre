import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// import angular material module
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UniteUnComponent } from './uniteUn/uniteUn.component';
import { UniteDeuxComponent } from './uniteDeux/uniteDeux.component';
import { UniteTroisComponent } from './uniteTrois/uniteTrois.component';
import { UniteQuatreComponent } from './uniteQuatre/uniteQuatre.component';
import { UniteCinqComponent } from './uniteCinq/uniteCinq.component';

import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';

// import des composants material
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

// import fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';


FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UniteUnComponent,
    UniteDeuxComponent,
    UniteTroisComponent,
    UniteQuatreComponent,
    UniteCinqComponent,
    HomeComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
