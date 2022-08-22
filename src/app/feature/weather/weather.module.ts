import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForcastComponent } from './components/forcast/forcast.component';



@NgModule({
  declarations: [
    ForcastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ForcastComponent]
})
export class WeatherModule { }
