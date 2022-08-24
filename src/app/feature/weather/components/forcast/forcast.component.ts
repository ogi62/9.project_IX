import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';



@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})


export class ForcastComponent implements OnInit {

  // forecastData: <forecastDataInterface>[]; not working ???
  forecastData!:{dateString: string, temp: number}[];

  constructor(private weatherService: WeatherService ) { 
   weatherService.getForecast()
   .subscribe((forecastDataRes)=> {
    this.forecastData = forecastDataRes;
   });
  }

  ngOnInit(): void {
  }

}
