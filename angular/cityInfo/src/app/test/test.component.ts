import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: string;
  default: string;
  today: Date;

  constructor(private cityService: CityService) {
    this.default = 'Default';
    this.name = '';
    this.today = new Date();
  }

  ngOnInit() {
  }

  updateText() {
    this.default = 'Default Updated';
    this.name = 'name Updated';
  }

  resetText() {
    this.default = 'Default';
    this.name = '';
  }

  getCities() {
    this.cityService.getHeroes().subscribe(response => {
      console.log(response);
    });
  }

}
