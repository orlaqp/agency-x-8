import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { StyleManagerService } from './style-manager.service';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,

  ],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
  providers: [ StyleManagerService ]
})
export class ThemePickerModule {}
