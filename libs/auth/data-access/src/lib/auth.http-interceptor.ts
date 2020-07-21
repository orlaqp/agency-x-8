import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private secureRoutes = ['http://my.route.io/secureapi'];

    constructor(private oidcSecurityService: OidcSecurityService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Ensure we send the token only to routes which are secured
        if (!this.secureRoutes.find((x) => req.url.startsWith(x))) {
            return next.handle(req);
        }

        const token = this.oidcSecurityService.getToken();

        if (!token) {
            return next.handle(req);
        }

        req = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token),
        });

        return next.handle(req);
    }
}