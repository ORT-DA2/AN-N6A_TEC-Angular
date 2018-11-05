import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityFormComponent } from './city-form/city-form.component';
import { CityMainComponent } from './city-main/city-main.component';

const routes: Routes = [
  { path: 'new', component: CityFormComponent },
  { path: 'edit/:id', component: CityFormComponent },
 // { path: 'detail/:id', component: CityFormComponent },//add resolver
  { path: '', component: CityMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
