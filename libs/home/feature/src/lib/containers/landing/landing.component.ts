import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select } from '@ngxs/store';
import { AuthState, OidcUser, AuthService } from '@agency-x/auth/data-access';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Component({
    selector: 'agency-x-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
    @Select(AuthState.getUser)
    user$: Observable<OidcUser>;
    emailControl = new FormControl('');

    private sub: Subscription;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    
    ngOnInit() {
        // this.authService.isAuthenticated$.subscribe((isAuth) => {
        //     if (isAuth) this.router.navigateByUrl('/home');
        // });
    }

    ngOnDestroy(): void {
        if (!this.sub) return;

        this.sub.unsubscribe();
    }

    signIn() {
        this.authService.authorize();
    }

    register() {
        this.authService.goToRegistration();
    }
}
