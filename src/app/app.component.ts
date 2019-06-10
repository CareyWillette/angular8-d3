import { Component } from '@angular/core';
import { D3DataService } from './@core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  barChartData: any;

  constructor(private d3DataService: D3DataService) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.d3DataService.getD3Data('bar-chart').subscribe(
      res => {
        this.barChartData = res;
        console.log('D3 data: ', res);
      }
    );
  }
}
