import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@agency-x/theme-picker';
import { LanguagePickerModule } from '@agency-x/language-picker';
import { EmailInputModule } from '@agency-x/email-input';

@NgModule({
  imports: [
    CommonModule,
    ThemePickerModule,
    LanguagePickerModule,
    EmailInputModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent}
    ])
  ],
  declarations: [LandingComponent]
})
export class HomeFeatureModule {}
