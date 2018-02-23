import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DemoHeaderComponent } from './components/demo-header';

import { BarChartDemoComponent } from './components/charts/bar-chart-demo';

import { PieChartDemoComponent } from './components/charts/pie-chart-demo';


import { ChartSectionComponent } from './components/chart-section.component';

import { TabsModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AppServices } from './services/app.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http/src/http_module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    ChartSectionComponent,
    AppComponent,
    DemoHeaderComponent,
    
    BarChartDemoComponent,
   
    PieChartDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers:[AppServices]
})
export class AppModule {
}
