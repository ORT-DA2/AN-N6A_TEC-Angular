import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionPipe } from './description.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DescriptionPipe
  ],
  exports: [
    DescriptionPipe
  ]
})
export class SharedModule { }
