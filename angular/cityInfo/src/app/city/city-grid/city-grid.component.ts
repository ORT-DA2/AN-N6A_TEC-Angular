import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService, City } from '../../service/city.service';
import { CitySyncService } from '../city-sync.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css']
})
export class CityGridComponent implements OnInit, OnDestroy {

  cities: Array<City>;

  selectedCity: City;
  isFormActive: boolean;
  syncSubscription: Subscription;

  constructor(
    private cityService: CityService,
    private syncService: CitySyncService) { }

  ngOnInit() {
    this.updateGrid();

    this.syncSubscription = this.syncService.cityDataRequiresUpdate.pipe(filter(v => v === true)).subscribe(() => {
      this.updateGrid();
      this.isFormActive = false;
    });
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

  addNewCity() {
    this.selectedCity = undefined;
    this.isFormActive = true;
  }

  closeForm($event) {
    this.isFormActive = false;
  }

  ngOnDestroy() {
    this.syncSubscription.unsubscribe();
  }

}
