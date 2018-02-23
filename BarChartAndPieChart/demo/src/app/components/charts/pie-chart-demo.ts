import { Component } from '@angular/core';
import { AppServices } from '../../services/app.service';

@Component({
  selector: 'pie-chart-demo',
  templateUrl: './pie-chart-demo.html'
})
export class PieChartDemoComponent {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  data;
  constructor(public appservice:AppServices){

    this.appservice.getPie().subscribe(data=>this.pieChartData=JSON.parse(JSON.stringify(data)),error=>alert(error),()=>console.log(this.pieChartData));
  
  
    //this.barChartData = this.getData;
       }
  public chartHovered(e:any):void {
    console.log(e);
  }
}
