import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class AngularMaterialModule {}
