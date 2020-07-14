import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Store } from '@ngxs/store';
import { UpdateUserAction, OidcUser } from '@agency-x/auth/data-access';

@Component({
    selector: 'agx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'frontend';

    constructor(private oidcSecurityService: OidcSecurityService, private store: Store) {}

    ngOnInit() {
        this.oidcSecurityService
            .checkAuth()
            .subscribe((isAuthenticated) => {
                console.log('app authenticated', isAuthenticated);
            });

        this.oidcSecurityService
            .userData$
            .subscribe((data: OidcUser) => {
                this.store.dispatch(new UpdateUserAction(data));
            });
    }
}
