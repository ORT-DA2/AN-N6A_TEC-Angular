import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'd48cd89b-a7d9-4823-8cce-dddbe9b97356' });

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`http://localhost:5000/api/cities`, { headers: this.headers });
  }


  getCityImage(cityId: number): Observable<City[]> {
    return this.http.get<any>(`http://localhost:5000/api/cityImage/${cityId}`, { headers: this.headers });
  }

}
