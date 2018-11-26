import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailComponent } from './city-detail.component';
import { of } from 'rxjs';
import { CityService, City } from 'src/app/service/city.service';
import { Component } from '@angular/core';

class CityServiceMock {
  getCityImage(id) {
    return of(null);
  }
}

describe('CityDetailComponent', () => {
  let component: CityDetailComponent;
  let fixture: ComponentFixture<CityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityDetailComponent],
      providers: [
        { provide: CityService, useClass: CityServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailComponent);
    component = fixture.componentInstance;

    component.city = {
      id: 1,
      name: 'City One',
      description: 'One',
      numberOfPointsOfInterest: 3,
      pointsOfInterest: [1, 2, 3]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'app-host',
  template: '<app-city-detail [city]="city"></app-city-detail>'
})
class HostComponent {
  city: City;

  constructor() {
    this.city = {
      id: 1,
      name: 'City One',
      description: 'One',
      numberOfPointsOfInterest: 3,
      pointsOfInterest: [1, 2, 3]
    };
  }
}

describe('CityDetailComponent - HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, CityDetailComponent],
      providers: [
        { provide: CityService, useClass: CityServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;

    component.city = {
      id: 1,
      name: 'City One',
      description: 'One',
      numberOfPointsOfInterest: 3,
      pointsOfInterest: [1, 2, 3]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
