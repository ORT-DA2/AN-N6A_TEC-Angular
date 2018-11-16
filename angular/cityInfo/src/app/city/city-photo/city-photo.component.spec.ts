import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPhotoComponent } from './city-photo.component';

describe('CityPhotoComponent', () => {
  let component: CityPhotoComponent;
  let fixture: ComponentFixture<CityPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
