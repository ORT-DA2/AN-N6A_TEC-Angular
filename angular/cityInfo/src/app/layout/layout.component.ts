import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, NavigationStart } from '@angular/router';
import { NotificationService } from '../core/notification.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private messageService: NotificationService) { }

  ngOnInit() {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationCancel) {
        // spinnerService.stop();
      }
      if (val instanceof NavigationEnd) {
        this.messageService.clear();
        // spinnerService.stop();
      }
      if (val instanceof NavigationStart) {
        // spinnerService.start();
      }
    });
  }

}
