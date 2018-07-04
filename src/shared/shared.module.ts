import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../custom-material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule {}
