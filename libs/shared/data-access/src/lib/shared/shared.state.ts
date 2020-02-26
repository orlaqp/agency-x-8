import { State, Action, Selector, StateContext, NgxsOnInit, Store } from '@ngxs/store';
import { ChangeThemeAction, ChangeLanguageAction } from './shared.actions';
import { ITheme } from '../..';
import { EnvService } from '@agency-x/config/frontend';
import { StyleManagerService } from '../style-manager.service';
import { ILanguage } from '../interfaces';
import { LanguageManagerService } from '../language-manager.service';

export interface SharedStateModel {
  themes: ITheme[];
  selectedTheme: ITheme;
  languages: ILanguage[];
  selectedLanguage: ILanguage;
}

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    themes: [],
    selectedTheme: undefined,
    languages: [],
    selectedLanguage: undefined
  }
})
export class SharedState implements NgxsOnInit {

  constructor(
    private store: Store,
    private envService: EnvService,
    private styleManagerService: StyleManagerService,
    private languageManagerService: LanguageManagerService
  ) {

  }

  @Selector()
  public static themes(state: SharedStateModel) {
    return state.themes;
  }

  @Selector()
  public static selectedTheme(state: SharedStateModel) {
    return state.selectedTheme;
  }

  @Selector()
  public static languages(state: SharedStateModel) {
    return state.languages;
  }

  @Selector()
  public static selectedLanguage(state: SharedStateModel) {
    return state.selectedLanguage;
  }

  ngxsOnInit(ctx?: StateContext<SharedStateModel>) {
    ctx.patchState({
      themes: this.envService.themes,
      selectedTheme: this.envService.themes.find(t => t.isDefault),
      languages: this.envService.languages,
      selectedLanguage: this.envService.languages.find(l => l.isDefault)
    });

    this.store.select<ITheme>(store => store.shared ? store.shared.selectedTheme : undefined)
    .subscribe(theme => this.styleManagerService.changeTheme(theme));

    this.store.select<ILanguage>(store => store.shared ? store.shared.selectedLanguage : undefined)
    .subscribe(lang => this.languageManagerService.changeLanguage(lang));

  }

  @Action(ChangeThemeAction)
  public changeTheme(ctx: StateContext<SharedStateModel>, { theme }: ChangeThemeAction) {
    if (theme) {
      ctx.patchState({ selectedTheme: theme });
    }
  }

  @Action(ChangeLanguageAction)
  public changeLanguage(ctx: StateContext<SharedStateModel>, { language }: ChangeLanguageAction) {
    if (language) {
      ctx.patchState({ selectedLanguage: language });
    }
  }

  // @Selector()
  // public static getState(state: SharedStateModel) {
  //   return state;
  // }

  // @Action(SharedAction)
  // public add(ctx: StateContext<SharedStateModel>, { payload }: SharedAction) {
  //   const stateModel = ctx.getState();
  //   stateModel.items = [...stateModel.items, payload];
  //   ctx.setState(stateModel);
  // }
}
