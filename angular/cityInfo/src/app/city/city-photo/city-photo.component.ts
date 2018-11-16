import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { City, CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city-photo',
  templateUrl: './city-photo.component.html',
  styleUrls: ['./city-photo.component.css']
})
export class CityPhotoComponent implements OnInit {

  @Input() city: City;
  @Output() closeRequested = new EventEmitter<boolean>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private cityService: CityService) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.cityService.postPic(this.city.id, this.form.get('pic').value).subscribe(() => console.log('call'));
  }

  handleFileInput(files: FileList) {
    this.form.get('pic').setValue(files.item(0));
  }

  cancel() {
    this.form.reset();
    this.closeRequested.emit(true);
  }

  private createForm() {
    this.form = this.fb.group({
      pic: ['', Validators.required]
    });
  }

}
