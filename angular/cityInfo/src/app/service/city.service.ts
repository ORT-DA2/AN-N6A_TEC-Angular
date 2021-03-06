import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { SessionService } from './session.service';
import { environment } from '../../environments/environment';
import { CityDto } from '../interfaces/city-dto.interface';

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
    return this.http.get<City[]>(`${environment.apiUrl}/cities`, { headers: this.getHeader() });
  }

  getCity(id: number): Observable<City> {
    if (id) {
      return this.http.get<City>(`${environment.apiUrl}/cities/${id}`, { headers: this.getHeader() });
    }
    return of(null);
  }


  getCityImage(cityId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/cityImage/${cityId}`, { responseType: 'blob' });
  }

  deleteCity(cityId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/cities/${cityId}`, { headers: this.getHeader(), observe: 'response' });
  }

  post(dto: CityDto): Observable<any> {
    return this.http.post(`${environment.apiUrl}/cities`, dto, { headers: this.getHeader(), observe: 'response' });
  }

  put(dto: CityDto): Observable<any> {
    return this.http.put(`${environment.apiUrl}/cities`, dto, { headers: this.getHeader(), observe: 'response' });
  }

  postPic(cityId: number, fileToUpload: File): Observable<any> {

    // important !!! do not set content type
    const header = new HttpHeaders(
      {
        'Authorization': this.sessionService.getToken()
      });

    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    formData.append('cityId', '' + cityId);
    formData.append('fileName', fileToUpload.name);
    return this.http.post(`${environment.apiUrl}/cityimage`, formData, { headers: header });
  }


}
