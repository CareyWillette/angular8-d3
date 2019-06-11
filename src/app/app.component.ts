import { Component } from '@angular/core';
import { D3DataService } from './@core/services';
import { Observable } from 'rxjs';
import { share, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isAlive = true;

  barChartData1: any;


  constructor(private d3DataService: D3DataService) {
   
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const sharedBarChartData$ = this.d3DataService.getD3Data('bar-chart').pipe(share(),takeWhile(() => this.isAlive));

    sharedBarChartData$.subscribe(
        res => {
          this.barChartData1 = res;
          console.log('D3 data1: ', res);
        }
      );
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.isAlive = false;
  }
}
