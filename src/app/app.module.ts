import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DynamicWrapperModule} from "./dynamic-wrapper/dynamic-wrapper.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        DynamicWrapperModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
