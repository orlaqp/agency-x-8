import { Component } from '@angular/core';
import { ITheme, ChangeThemeAction } from '@agency-x/shared/data-access';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SharedState } from '@agency-x/shared/data-access';

@Component({
  selector: 'agency-x-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

  @Select(SharedState.themes)
  public themes$: Observable<ITheme[]>;

  @Select(SharedState.selectedTheme)
  public selectedTheme$: Observable<ITheme>;

  constructor(private store: Store) { }

  changeTheme(t: ITheme) {
    this.store.dispatch(new ChangeThemeAction(t));
  }

}
