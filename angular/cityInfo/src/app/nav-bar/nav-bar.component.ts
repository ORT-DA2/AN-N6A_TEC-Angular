import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }


  logOut() {
    this.sessionService.logOff();
    this.router.navigate(['/login']);
  }

}
