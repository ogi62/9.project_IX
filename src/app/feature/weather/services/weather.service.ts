import { Injectable } from '@angular/core';
import { map,switchMap, Observable, pluck, mergeMap, of, filter } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

import { CoordinatesInterface } from '../types/cordinatesInterface';
import { openWeatherResponseInterface } from '../types/openWeatherResponseInterface';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(private http: HttpClient) { }

  

  getCurrentLocation() {
    return new Observable<CoordinatesInterface>((observer)=> {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      )
    })
  }

  getForecast() {
    return  this.getCurrentLocation()
    .pipe(
      map(coords => {
        return new HttpParams()
        .set('lat', String(coords.latitude))
        .set('lon',String(coords.longitude))
        .set('units', 'metric')
        .set('appid', 'bbfbc9f4e868c9d32cd770457de2110b')
      }),
      switchMap(params => 
        this.http.get<openWeatherResponseInterface>(this.url, { params })
        ),
        // 1. one way ...
        pluck('list'),
        // break array of 40objects to just 40 objects
        mergeMap(value => of(...value)),
        // return every 8th object ... 
        filter((value, index)=> index % 8 === 0)

        // 2. second way ...
        // alternative for this up thing is when you do line 44,45and 46...
        // map(repsonse => {
        //   return response.list.map((record,index)=> {
        //     return { dt_txt,temp}
        //   }).filter((record, index)=> index % 8 === 0)
        // })
    );
  }
}
