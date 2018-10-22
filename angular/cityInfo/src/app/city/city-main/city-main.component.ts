import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-city-main',
  templateUrl: './city-main.component.html',
  styleUrls: ['./city-main.component.css']
})
export class CityMainComponent implements OnInit, OnChanges, OnDestroy {


  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  constructor() {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('OnChanges');
  }

}
