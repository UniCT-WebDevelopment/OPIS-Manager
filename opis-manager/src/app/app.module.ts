import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { KatexModule } from 'ng-katex';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DebounceModule } from 'ngx-debounce';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { FormulaComponent } from './formula/formula.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    FormulaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    KatexModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ChartModule,
    NgbModule,
    DebounceModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
