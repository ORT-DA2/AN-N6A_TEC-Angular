import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { UserService } from '../service/user.service';
import { LoginRequest } from '../interfaces/login-request';
import { Session } from '../interfaces/session';
import { Router } from '@angular/router';
import { NotificationService } from '../core/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginRequest;
  submitted: boolean;

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService) {
    this.model = { userName: '', password: '' };
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.service.setToken(`User: ${this.model.userName}- Date: ${(new Date()).toLocaleString()}`);

    this.userService.postLogin(this.model).subscribe((response: Session) => {

      if (response) {
        this.notificationService.display({ message: 'User Login!', severity: 'info' });

        this.sessionService.setSession(response);

        if (this.sessionService.isAuthenticated) {
          this.router.navigate([this.sessionService.attemptedUrl]);
        }
      } else {
        this.notificationService.display({ message: 'Invalid username or password', severity: 'error' });
      }

    }, () => {
      this.notificationService.display({ message: 'Error occurred', severity: 'error' });
    });
  }

}
