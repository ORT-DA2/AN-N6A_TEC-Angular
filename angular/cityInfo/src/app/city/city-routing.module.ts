import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityFormComponent } from './city-form/city-form.component';
import { CityMainComponent } from './city-main/city-main.component';
import { AuthorizationGuard } from '../shared/autorizationGuard';
import { AuthenticationGuard } from '../shared/authentication.guard';

const routes: Routes = [
  { path: 'city/new', component: CityFormComponent, canActivate: [AuthenticationGuard] },
  { path: 'city/edit/:id', component: CityFormComponent, canActivate: [AuthorizationGuard], data: { onlyAdmin: true } },
  { path: 'city', component: CityMainComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
