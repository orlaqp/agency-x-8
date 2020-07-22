import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AutoLoginComponent } from './containers/auto-login/auto-login.component';

export const authFeatureRoutes: Route[] = [];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild([
            {
                path: 'auto-login',
                pathMatch: 'full',
                component: AutoLoginComponent,
                //   , canActivate: [ AuthorizationGuard ]
            },
            { path: 'forbidden', component: UnauthorizedComponent },
            { path: 'unauthorized', component: UnauthorizedComponent },
        ]),
    ],
    declarations: [UnauthorizedComponent, AutoLoginComponent],
})
export class AuthFeatureModule {}
