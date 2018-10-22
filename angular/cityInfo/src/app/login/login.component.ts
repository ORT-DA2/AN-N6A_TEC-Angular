import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';

export interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Login;
  submitted: boolean;

  constructor(private service: SessionService) {
    this.model = { username: 'juan89', password: 'pwd' };
    this.submitted = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.service.setToken(`User: ${this.model.username}- Date: ${(new Date()).toLocaleString()}`);

    console.log(JSON.stringify(this.model));
  }

}
