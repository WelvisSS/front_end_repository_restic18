import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-kandle-chart',
  templateUrl: './kandle-chart.component.html',
  styleUrls: ['./kandle-chart.component.css']
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class KandleChartComponent {
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-kandle-chart',
//   templateUrl: './kandle-chart.component.html',
//   styleUrls: ['./kandle-chart.component.css']
// })
// export class KandleChartComponent {

// }
