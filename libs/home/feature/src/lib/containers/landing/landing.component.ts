import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select } from '@ngxs/store';
import { AuthState, OidcUser } from '@agency-x/auth/data-access';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'agency-x-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
    @Select(AuthState.getUser)
    user$: Observable<OidcUser>;
    emailControl = new FormControl('');

    private sub: Subscription;

    constructor(
        private router: Router,
        private oidcSecurityService: OidcSecurityService
    ) {}

    
    ngOnInit() {
        this.user$.subscribe(u => {
            debugger;
            if (u) this.router.navigateByUrl('/home');
        })
    }

    ngOnDestroy(): void {
        if (!this.sub) return;
        
        this.sub.unsubscribe();
    }

    signIn() {
        this.oidcSecurityService.authorize();
    }
}
