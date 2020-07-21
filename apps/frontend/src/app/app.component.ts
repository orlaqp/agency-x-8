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
            // .checkAuthIncludingServer()
            .subscribe((isAuthenticated) => {
                debugger;
                console.warn('app authenticated', isAuthenticated);
            });

        this.oidcSecurityService.isAuthenticated$.subscribe(u => console.log('**** IS AUTHENTICATED **** : ' + u));
        this.oidcSecurityService.userData$.subscribe(u => console.log('**** USER DATA **** : ' + u));
    }
}
