import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Store } from '@ngxs/store';
import { UpdateUserAction, OidcUser } from '@agency-x/auth/data-access';
import { Router } from '@angular/router';

@Component({
    selector: 'agx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'frontend';

    constructor(
        private oidcSecurityService: OidcSecurityService,
        private store: Store,
        private router: Router
    ) {}

    ngOnInit() {
        // this.oidcSecurityService
        //     .checkAuth()
        //     // .checkAuthIncludingServer()
        //     .subscribe((isAuthenticated) => {
        //         console.warn('app authenticated', isAuthenticated);
        //     });

        // this.oidcSecurityService.checkAuthIncludingServer().subscribe((isAuthenticated) => {
        //     console.warn('app authenticated', isAuthenticated);
        //     const at = this.oidcSecurityService.getToken();
        //     console.warn(at);
        // });

        this.oidcSecurityService
            .checkAuth()
            .subscribe((isAuthenticated) => {
                if (!isAuthenticated) {
                    if ('/auto-login' !== window.location.pathname) {
                        this.write('redirect', window.location.pathname);
                        this.router.navigate(['/auto-login']);
                    }
                }
                if (isAuthenticated) {
                    this.navigateToStoredEndpoint();
                }
            });

        // this.oidcSecurityService.isAuthenticated$.subscribe(u => console.log('**** IS AUTHENTICATED **** : ' + u));
        // this.oidcSecurityService.userData$.subscribe(u => console.log('**** USER DATA **** : ' + u));
    }

    private navigateToStoredEndpoint() {
        const path = this.read('redirect');

        if (this.router.url === path) {
            return;
        }

        if (path.toString().includes('/unauthorized')) {
            this.router.navigate(['/']);
        } else if (path.toString() === '/') {
            this.router.navigate(['/home']);
        } else {
            this.router.navigate([path]);
        }
    }

    private read(key: string): any {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }

        return;
    }

    private write(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
