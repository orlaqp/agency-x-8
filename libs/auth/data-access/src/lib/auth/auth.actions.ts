import { OidcUser } from '../interfaces';

export class UpdateUserAction {
  public static readonly type = '[Auth] Change Auth User';
  constructor(public payload: OidcUser) { }
}

