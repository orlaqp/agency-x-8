import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

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
