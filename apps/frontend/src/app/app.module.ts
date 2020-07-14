import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFrontendModule } from '@agency-x/config/frontend';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { map, switchMap, filter } from 'rxjs/operators';
import { AuthModule, EventTypes, LogLevel, OidcConfigService, PublicEventsService } from 'angular-auth-oidc-client';
import { AuthDataAccessModule } from '@agency-x/auth/data-access'; 

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () => {
        return oidcConfigService.withConfig({
            stsServer: 'http://127.0.0.1:8080/auth/realms/agency-x',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'web-app',
            scope: 'openid profile email phone offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            logLevel: LogLevel.Debug,
        });
    }
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
        }
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
