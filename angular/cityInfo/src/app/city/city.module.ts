import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityGridComponent } from './city-grid/city-grid.component';
import { CityFormComponent } from './city-form/city-form.component';
import { CityMainComponent } from './city-main/city-main.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

import { CityService } from '../service/city.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CityRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CityGridComponent,
    CityFormComponent,
    CityMainComponent,
    CityDetailComponent],
  providers: [
    CityService
  ],
  exports: [
    CityMainComponent
  ]

})
export class CityModule { }
