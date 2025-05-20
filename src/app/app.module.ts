import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSlideToggleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
