import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'home-feature',
          loadChildren: () =>
            import('@agency-x/home/feature').then(
              module => module.HomeFeatureModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    ConfigFrontendModule,
    NgxsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
