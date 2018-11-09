import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { SessionService } from './session.service';

export interface City {
  id: number;
  name: string;
  description: string;
  numberOfPointsOfInterest: number;
  pointsOfInterest: Array<any>;
}

@Injectable()
export class CityService {

  // private heroesUrl = 'api/city';
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private sessionService: SessionService) {
  }

  getHeader(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.sessionService.getToken() });
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`http://localhost:5000/api/cities`, { headers: this.getHeader() });
  }

  getCity(id: number): Observable<City> {
    if (id) {
      return this.http.get<City>(`http://localhost:5000/api/cities/${id}`, { headers: this.getHeader() });
    }
    return of(null);
  }


  getCityImage(cityId: number): Observable<City[]> {
    return this.http.get<any>(`http://localhost:5000/api/cityImage/${cityId}`, { headers: this.getHeader() });
  }

  deleteCity(cityId: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/cities/${cityId}`, { headers: this.getHeader(), observe: 'response' });
  }

}
