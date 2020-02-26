import { ITheme } from '../interfaces';

// export class SharedAction {
//   public static readonly type = '[Shared] Add item';
//   constructor(public payload: string) { }
// }

export class ChangeThemeAction {
  public static readonly type = '[Shared] Change Theme';
  constructor(public theme: ITheme) { }
}
