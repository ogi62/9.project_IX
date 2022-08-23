import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent implements OnInit {

  constructor(private weatherService: WeatherService ) { 
   weatherService.getForecast()
   .subscribe((weatherResponse)=> {
    console.log(weatherResponse);
   });
  }

  ngOnInit(): void {
  }

}
