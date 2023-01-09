import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {
  private API_KEY = '4123bf9e94cd4b058f791b7bf2b5a75c';
  private API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}`;

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.API_URL}&q=${city}`);
  }
}
