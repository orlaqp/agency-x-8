import { State, Action, Selector, StateContext, Store } from '@ngxs/store';
import { UpdateUserAction } from './auth.actions';
import { OidcUser } from '../interfaces';
import { Injectable } from '@angular/core';
import { OidcSecurityService, EventTypes, PublicEventsService } from 'angular-auth-oidc-client';
import { filter } from 'rxjs/operators';

export interface AuthStateModel {
    user: OidcUser;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        user: null,
    },
})
@Injectable({
    providedIn: 'root',
})
export class AuthState {
    constructor(
        private oidcSecurityService: OidcSecurityService,
        private readonly eventService: PublicEventsService,
        private store: Store
    ) {

        this.eventService
            .registerForEvents()
            .pipe(filter((notification) => notification.type === EventTypes.CheckSessionReceived))
            .subscribe((config) => {
                debugger;
                console.log('ConfigLoaded', config);
            });

        this.oidcSecurityService.isAuthenticated$.subscribe((isAuth) => {
            debugger;
            console.log('IS AUTHENTICATED: ' + isAuth);
        });

        this.oidcSecurityService.userData$.subscribe((data: OidcUser) => {
            debugger;
            this.store.dispatch(new UpdateUserAction(data));
        });

        
    }

    @Selector()
    public static getUser(state: AuthStateModel) {
        return state.user;
    }

    @Selector()
    public static getIsAuthenticated(state: AuthStateModel) {
        return !!state.user;
    }

    @Action(UpdateUserAction)
    public add(
        ctx: StateContext<AuthStateModel>,
        { payload: user }: UpdateUserAction
    ) {
        debugger;
        ctx.patchState({ user });
    }
}
