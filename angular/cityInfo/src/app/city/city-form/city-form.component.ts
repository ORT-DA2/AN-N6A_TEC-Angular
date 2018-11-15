import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { City, CityService } from '../../service/city.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/notification.service';
import { CitySyncService } from '../city-sync.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit, OnChanges {

  cityForm: FormGroup;
  @Input() city: City;
  @Output() closeRequested = new EventEmitter<boolean>();

  get name() { return this.cityForm.get('name'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cityService: CityService,
    private notificationService: NotificationService,
    private syncService: CitySyncService) {
    /*this.cityForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });*/

    this.cityForm = this.fb.group({
      id: [],
      name: [, Validators.required],
      description: [],
      pointOfInterest: []
    });
  }

  ngOnInit() {
    // from https://v6.angular.io/guide/router
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        const cityId = +params.get('id');
        console.log(`param id value: ${cityId}`);
        return this.cityService.getCity(cityId);
      })
    ).subscribe(x => x ? this.updateForm(x) : this.cityForm.reset());

    console.log(`Using snapshot : ${this.route.snapshot.paramMap.get('id')}`);

    this.updateForm(this.city);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes.city.currentValue) {
      this.updateForm(changes.city.currentValue);
    }

    if (changes.city && changes.city.currentValue === undefined) {
      this.cityForm.reset();
    }
  }

  submit() {
    if (+this.cityForm.get('id').value) {
      this.edit();
    } else {
      this.cityForm.patchValue({
        id: 0,
      });
      this.saveNew();
    }
  }

  cancel() {
    this.cityForm.reset();
    this.closeRequested.emit(true);
  }

  updateForm(city: City) {
    this.cityForm.patchValue({
      id: city.id,
      name: city.name,
      description: city.description,
    });
  }

  private saveNew() {
    this.cityService.post(this.cityForm.value).subscribe(response => {
      this.syncService.notifyUpdate(true);
      if (response.code === 200) {
        this.notificationService.display({ message: 'City successfully added', severity: 'info' });
      } else {
        this.notificationService.display({ message: 'An error occur', severity: 'error' });
      }
    });
  }

  private edit() {
    this.cityService.put(this.cityForm.value).subscribe(response => {
      this.syncService.notifyUpdate(true);
      if (response.code === 200) {
        this.notificationService.display({ message: 'City successfully added', severity: 'info' });
      } else {
        this.notificationService.display({ message: 'An error occur', severity: 'error' });
      }
    });
  }

}
