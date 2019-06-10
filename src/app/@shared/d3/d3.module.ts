import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const SHARED_COMPONENTS = [
  BarChartComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS]
})
export class D3Module { }
