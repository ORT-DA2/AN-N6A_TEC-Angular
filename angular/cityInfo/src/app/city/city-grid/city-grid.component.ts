import { Component, OnInit } from '@angular/core';
import { CityService, City } from '../../service/city.service';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css']
})
export class CityGridComponent implements OnInit {

  cities: Array<City>;

  selectedCity: City;
  isFormActive: boolean;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(response => {
      this.cities = response;
    });
  }

  selectCity($event, city: City) {
    this.selectedCity = city;
    this.isFormActive = true;
  }

  closeForm($event) {
    this.isFormActive = false;
  }

}
