import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isAuthenticated: boolean;

  subscription: Subscription;

  constructor(public sessionService: SessionService) { }

  ngOnInit() {}

}
