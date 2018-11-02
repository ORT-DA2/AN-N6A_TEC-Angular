import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { UserService } from '../service/user.service';
import { LoginRequest } from '../interfaces/login-request';
import { Session } from '../interfaces/session';
import { Router } from '@angular/router';

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
    private router: Router) {
    this.model = { userName: '', password: '' };
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.service.setToken(`User: ${this.model.userName}- Date: ${(new Date()).toLocaleString()}`);

    this.userService.postLogin(this.model).subscribe((response: Session) => {
      this.sessionService.setSession(response);

      if (this.sessionService.isAuthenticated) {
        this.router.navigate([this.sessionService.attemptedUrl]);
      }
    });
  }

}
