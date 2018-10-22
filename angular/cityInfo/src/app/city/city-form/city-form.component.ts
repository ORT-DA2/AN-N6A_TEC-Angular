import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { City } from '../../service/city.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnChanges {

  cityForm: FormGroup;
  @Input() city: City;
  @Output() closeRequested = new EventEmitter<boolean>();

  get name() { return this.cityForm.get('name'); }

  constructor(private fb: FormBuilder) {
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

  /**
        [
          this.fb.group({
            name: [, Validators.required],
            description: [, Validators.maxLength(25)]
          })
        ]
   */

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes.city.currentValue) {
      const c = changes.city.currentValue;
      this.cityForm.patchValue({
        id: c.id,
        name: c.name,
        description: c.description
      });
    }
  }

  submit() {
    console.log(this.cityForm.value);
  }

  cancel() {
    this.cityForm.reset();
    this.closeRequested.emit(true);
  }

}
