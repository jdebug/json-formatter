import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { JsonViewerModule } from './json-viewer/json-viewer.module';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { CoreModule } from './common/core.module';

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    CoreModule,
    JsonViewerModule, 
    AceEditorModule     
  ],  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

