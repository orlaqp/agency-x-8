import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { ThemePickerModule } from '@agency-x/theme-picker';
import { LanguagePickerModule } from '@agency-x/language-picker';
import { EmailInputModule } from '@agency-x/email-input';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@agency-x/angular-material';
import { HomeComponent } from './containers/home/home.component';
import { AuthorizationGuard } from '@agency-x/auth/data-access';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ThemePickerModule,
    LanguagePickerModule,
    EmailInputModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomeComponent
      , canActivate: [ AuthorizationGuard ]
    }
    ])
  ],
  declarations: [LandingComponent, HomeComponent]
})
export class HomeFeatureModule {}
