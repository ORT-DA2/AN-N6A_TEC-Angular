import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from '../service/city.service';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  name: string;
  default: string;
  today: Date;
  image = 'http://localhost:5000/api/cityImage/1';
  token: string;
  tokenNotify: Subscription;

  constructor(
    private cityService: CityService,
    private router: Router,
    private sessionService: SessionService) {
    this.default = 'Default';
    this.name = '';
    this.today = new Date();
  }

  ngOnInit() {
    const tokenNotify = this.sessionService.tokenChanged.subscribe((newToken: string) => {
      this.token = newToken;
    });
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
    this.cityService.getCities().subscribe(response => {
      console.log(response);
    });
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  displaySessionToken() {
    this.token = this.sessionService.getToken();
  }

  ngOnDestroy(): void {
    this.tokenNotify.unsubscribe();
  }

}
