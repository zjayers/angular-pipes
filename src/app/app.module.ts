import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MilesToKmPipe } from './miles-to-km.pipe';

@NgModule({
  declarations: [AppComponent, MilesToKmPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
