import { Component, OnInit } from '@angular/core';
import { CityService, City } from 'src/app/service/city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.css']
})
export class CityCardsComponent implements OnInit {

  cities: Observable<Array<City>>;

  constructor(public cityService: CityService) {
    this.cities = this.cityService.getCities();
  }

  ngOnInit() {
  }

}
