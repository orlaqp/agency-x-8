import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@agency-x/theme-picker';
import { LanguagePickerModule } from '@agency-x/language-picker';
import { EmailInputModule } from '@agency-x/email-input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemePickerModule,
    LanguagePickerModule,
    EmailInputModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent}
    ])
  ],
  declarations: [LandingComponent]
})
export class HomeFeatureModule {}
