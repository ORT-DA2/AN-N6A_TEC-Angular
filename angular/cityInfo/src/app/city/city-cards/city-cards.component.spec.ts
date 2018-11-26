import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CityCardsComponent } from './city-cards.component';
import { of } from 'rxjs';
import { CityService, City } from 'src/app/service/city.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-detail',
  template: '<p></p>'
})
class DummyComponent {
  @Input() city: City;
}

describe('CityCardsComponent', () => {
  let component: CityCardsComponent;
  let fixture: ComponentFixture<CityCardsComponent>;
  let getCitiesSpy: any;

  const cities = [{
    id: 1,
    name: 'City One',
    description: 'One',
    numberOfPointsOfInterest: 3,
    pointsOfInterest: [1, 2, 3]
  }, {
    id: 2,
    name: 'City Two',
    description: 'Two',
    numberOfPointsOfInterest: 0,
    pointsOfInterest: [1, 2, 3]
  }];

  // Create a fake service object with a `getCities()` spy
  const cityServiceMock = jasmine.createSpyObj('CityService', ['getCities']);


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CityCardsComponent, DummyComponent],
      providers: [
        { provide: CityService, useValue: cityServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    // Make the spy return a synchronous Observable with the test data
    getCitiesSpy = cityServiceMock.getCities.and.returnValue(of(cities));

    fixture = TestBed.createComponent(CityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(getCitiesSpy.calls.any()).toBe(true, 'getCities called');
  });

  it('should create one row per each retrieved city', fakeAsync(() => {
    expect(component).toBeTruthy();

    fixture.detectChanges();
    tick();

    expect(fixture.debugElement.nativeElement.querySelectorAll('.row').length).toBe(2);
  }));
});
