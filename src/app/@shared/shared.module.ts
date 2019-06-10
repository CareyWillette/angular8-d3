import { NgModule } from "@angular/core";
import { D3Module } from './d3/d3.module';

const SHARED_MODULES = [
  D3Module
];


@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})

export class SharedModule{}