import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'agency-x-auto-login',
  templateUrl: './auto-login.component.html',
  styleUrls: ['./auto-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoLoginComponent implements OnInit {
    constructor(public oidcSecurityService: OidcSecurityService) {}

    ngOnInit() {
        this.oidcSecurityService.authorize();
    }
}
