import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { AngularMaterialModule } from '@agency-x/angular-material';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [LanguagePickerComponent],
  exports: [LanguagePickerComponent]
})
export class LanguagePickerModule {}
