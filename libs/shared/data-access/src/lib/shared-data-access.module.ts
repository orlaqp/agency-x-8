import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { SharedState } from './shared/shared.state';
import { StyleManagerService } from './style-manager.service';
import { LanguageManagerService } from './language-manager.service';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([SharedState])],
  providers: [StyleManagerService, LanguageManagerService]
})
export class SharedDataAccessModule {}
