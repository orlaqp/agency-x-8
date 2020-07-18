import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from '@agency-x/config/frontend';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router, private envService: EnvService, private oidcSecurityService: OidcSecurityService) {}

    goToRegistration() {
        const oidc = this.envService.oidcConfig;
        this.router.navigateByUrl(
            `${oidc.stsServer}/protocol/openid-connect/registrations?client_id=${oidc.clientId}&response_type=code&scope=openid%20email&redirect_uri=${oidc.redirectUrl}&kc_locale=${oidc.locale}`
        );
    }

    authorize() {
        this.oidcSecurityService.authorize();
    }
}
