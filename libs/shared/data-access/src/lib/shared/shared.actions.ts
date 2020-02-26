import { ITheme, ILanguage } from '../interfaces';

// export class SharedAction {
//   public static readonly type = '[Shared] Add item';
//   constructor(public payload: string) { }
// }

export class ChangeThemeAction {
  public static readonly type = '[Shared] Change Theme';
  constructor(public theme: ITheme) { }
}

export class ChangeLanguageAction {
  public static readonly type = '[Shared] Change Language';
  constructor(public language: ILanguage) { }
}
