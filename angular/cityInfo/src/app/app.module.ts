import { CityService } from './service/city.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CityModule } from './city/city.module';
import { SessionService } from './service/session.service';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CityModule
  ],
  providers: [
    CityService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
