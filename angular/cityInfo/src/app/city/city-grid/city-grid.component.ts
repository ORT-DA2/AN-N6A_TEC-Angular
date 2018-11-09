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
    this.updateGrid();
  }

  updateGrid(): void {
    this.cityService.getCities().subscribe(response => {
      this.cities = response;
    });
  }

  selectCity($event, city: City) {
    this.selectedCity = city;
    this.isFormActive = true;
  }

  deleteCity($event, city: City) {
    this.cityService.deleteCity(city.id).subscribe(resp => {
      console.log(JSON.stringify(resp));
      this.updateGrid();
    });
  }

  closeForm($event) {
    this.isFormActive = false;
  }

}
