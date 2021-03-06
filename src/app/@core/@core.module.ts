import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { throwIfAlreadyLoaded } from './module-import.guard';

import { D3DataService } from './services'


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    D3DataService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
