import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { forecastDataInterface } from '../../types/forecastDataInterface';



@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})


export class ForcastComponent implements OnInit {

  forecast$!: Observable<forecastDataInterface[]>;

  constructor(private weatherService: WeatherService ) { 
   this.forecast$ =  weatherService.getForecast()
   
  }

  ngOnInit(): void {
  }

  
}
