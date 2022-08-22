import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherModule } from './feature/weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
