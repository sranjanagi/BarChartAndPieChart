import { Component } from '@angular/core';
import { AppServices } from '../../services/app.service';
import {Http} from '@angular/http';
import { error } from 'util';
@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart-demo.html'
})
export class BarChartDemoComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData:any[] = 
  
  [
    {data: [], label: ""},
    {data: [], label: ""}
  ];
  getData;
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  data; 
 
 
  constructor(public appservice:AppServices){

    this.appservice.getBar().subscribe(data=>this.barChartData=JSON.parse(JSON.stringify(data)),error=>alert(error),()=>console.log(this.barChartData));
  
  
    //this.barChartData = this.getData;
       }

  // constructor(private http:Http) {
  //     this.http.get('../../assets/file.json')
  //             .subscribe(res => this.data = res.json());
  // }

  

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
