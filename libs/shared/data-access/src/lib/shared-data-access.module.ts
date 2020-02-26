import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { SharedState } from './shared/shared.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([SharedState])]
})
export class SharedDataAccessModule {}
