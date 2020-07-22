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
import {
    AuthModule,
    EventTypes,
    OidcConfigService,
    PublicEventsService,
} from 'angular-auth-oidc-client';
import {
    AuthDataAccessModule,
} from '@agency-x/auth/data-access';
import { AuthFeatureModule } from '@agency-x/auth/feature';
import { NavigationFeatureModule } from '@agency-x/navigation/feature';
import { LandingComponent } from '@agency-x/home/feature';
import { AngularMaterialModule } from '@agency-x/angular-material';

const w = window || {};
const browserEnv = w['__env'] || {};

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () => oidcConfigService.withConfig(browserEnv.oidcConfig);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                // { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '', pathMatch: 'full', component: LandingComponent },
                {
                    path: 'home',
                    loadChildren: () =>
                        import('@agency-x/home/feature').then(
                            (module) => module.HomeFeatureModule
                        ),
                }
            ],
            { initialNavigation: 'enabled' }
        ),
        BrowserAnimationsModule,
        ConfigFrontendModule,
        // Auth
        AuthModule.forRoot(),
        // Ngxs
        NgxsModule.forRoot([]),
        NgxsStoragePluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        // features / data access
        AngularMaterialModule,
        AuthDataAccessModule,
        AuthFeatureModule,
        // NavigationFeatureModule,
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
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private readonly eventService: PublicEventsService) {
        this.eventService
            .registerForEvents()
            .pipe(
                filter(
                    (notification) =>
                        notification.type === EventTypes.ConfigLoaded
                )
            )
            .subscribe((config) => {
                console.log('ConfigLoaded', config);
            });
    }
}
