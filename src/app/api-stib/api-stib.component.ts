import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from '../services/api-weather.service';

@Component({
  selector: 'app-api-stib',
  templateUrl: './api-stib.component.html',
  styleUrls: ['./api-stib.component.scss']
})
export class ApiStibComponent {
  weather: any;
  city : any;
  constructor(private ApiWeatherService: ApiWeatherService) { }

  getWeatherCity(city: string) {
    this.ApiWeatherService.getWeather(city).subscribe(weather => {
      this.weather = weather;
    });
  }
}
