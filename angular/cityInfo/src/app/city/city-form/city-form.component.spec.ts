import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFormComponent } from './city-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CityService } from 'src/app/service/city.service';
import { NotificationService } from 'src/app/core/notification.service';
import { CitySyncService } from '../city-sync.service';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';

class CityServiceMock {
  getCityImage(id) {
    return of(null);
  }
}

class NotificationServiceMock { }

describe('CityFormComponent', () => {
  let component: CityFormComponent;
  let fixture: ComponentFixture<CityFormComponent>;

  const activatedRoute = new ActivatedRouteStub();

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CityFormComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        CitySyncService,
        { provide: CityService, useClass: CityServiceMock },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: NotificationService, useClass: NotificationServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.setParamMap({ id: 5 });

    fixture = TestBed.createComponent(CityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
