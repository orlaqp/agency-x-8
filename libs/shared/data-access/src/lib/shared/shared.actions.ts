export class SharedAction {
  public static readonly type = '[Shared] Add item';
  constructor(public payload: string) { }
}