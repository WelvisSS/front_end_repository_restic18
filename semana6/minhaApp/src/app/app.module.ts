import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AraraComponent } from './arara/arara.component';
import { KandleChartComponent } from './kandle-chart/kandle-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AraraComponent,
    KandleChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
