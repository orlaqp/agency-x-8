import { Component } from '@angular/core';
import { ILanguage, SharedState, ChangeLanguageAction } from '@agency-x/shared/data-access';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'agency-x-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent {

  @Select(SharedState.languages)
  public languages$: Observable<ILanguage[]>;

  @Select(SharedState.selectedLanguage)
  public selectedLanguage$: Observable<ILanguage>;

  constructor(private store: Store) { }

  changeLanguage(lang: ILanguage) {
    this.store.dispatch(new ChangeLanguageAction(lang));
  }

}
