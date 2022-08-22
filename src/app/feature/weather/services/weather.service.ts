import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CoordinatesInterface {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

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
}
