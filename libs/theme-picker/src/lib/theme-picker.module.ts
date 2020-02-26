import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { SharedDataAccessModule } from '@agency-x/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedDataAccessModule,
  ],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
  providers: []
})
export class ThemePickerModule {}
