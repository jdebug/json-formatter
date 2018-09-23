import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonViewerComponent } from './json-viewer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	JsonViewerComponent
  ],
  exports: [
    JsonViewerComponent
  ]
})
export class JsonViewerModule { }
