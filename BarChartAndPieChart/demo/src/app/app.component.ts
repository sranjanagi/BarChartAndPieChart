import { Component } from '@angular/core';

const gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'app',
  template: `
 
<bar-chart-demo></bar-chart-demo>




<pie-chart-demo></pie-chart-demo>

  `
})
export class AppComponent {
  public name: string = 'Charts';
  
 
}
