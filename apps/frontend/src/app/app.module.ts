import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { filter } from 'rxjs/operators';
import { AuthModule, EventTypes, OidcConfigService, PublicEventsService } from 'angular-auth-oidc-client';
import { AuthDataAccessModule } from '@agency-x/auth/data-access'; 
import { UnauthorizedComponent } from '@agency-x/auth/feature';

const w = window || {};
const browserEnv = w['__env'] || {};

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () => oidcConfigService.withConfig(browserEnv.oidcConfig)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@agency-x/home/feature').then(
              module => module.HomeFeatureModule
            )
        },
        { path: 'forbidden', component: UnauthorizedComponent },
        { path: 'unauthorized', component: UnauthorizedComponent },
      ],
      { initialNavigation: 'enabled' }
    ),
    AuthModule.forRoot(),
    AuthDataAccessModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(),
    ConfigFrontendModule,
    NgxsModule.forRoot([]),
    NgxsStoragePluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),   
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    OidcConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: configureAuth,
        deps: [OidcConfigService],
        multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private readonly eventService: PublicEventsService) {
        this.eventService
            .registerForEvents()
            .pipe(filter((notification) => notification.type === EventTypes.ConfigLoaded))
            .subscribe((config) => {
                console.log('ConfigLoaded', config);
            });
    }
}
