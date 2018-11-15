import { CityService } from './service/city.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
// import { CityModule } from './city/city.module';
import { SessionService } from './service/session.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './service/user.service';
import { BaseApiService } from './service/base-api.service';
import { LayoutComponent } from './layout/layout.component';
import { AuthenticationGuard } from './shared/authentication.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoreModule } from './core/core.module';

const appRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'city',
        loadChildren: './city/city.module#CityModule',
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LayoutComponent,
    NavBarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    // CityModule
  ],
  providers: [
    CityService,
    SessionService,
    UserService,
    BaseApiService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
