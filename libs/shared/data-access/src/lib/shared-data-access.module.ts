import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { SharedState } from './shared/shared.state';
import { StyleManagerService } from './style-manager.service';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([SharedState])],
  providers: [StyleManagerService]
})
export class SharedDataAccessModule {}
