import { State, Action, Selector, StateContext } from '@ngxs/store';
import { UpdateUserAction } from './auth.actions';
import { OidcUser } from '../interfaces';
import { Injectable } from '@angular/core';

export interface AuthStateModel {
  user: OidcUser;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null
  }
})
@Injectable()
export class AuthState {

  @Selector()
  public static getUser(state: AuthStateModel) {
    return state.user;
  }

  @Selector()
  public static getIsAuthenticated(state: AuthStateModel) {
    return !!state.user;
  }

  @Action(UpdateUserAction)
  public add(ctx: StateContext<AuthStateModel>, { payload: user }: UpdateUserAction) {
    ctx.patchState({ user })
  }
}
