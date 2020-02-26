import { State, Action, Selector, StateContext, NgxsOnInit, Store } from '@ngxs/store';
import { ChangeThemeAction } from './shared.actions';
import { ITheme } from '../..';
import { EnvService } from '@agency-x/config/frontend';
import { StyleManagerService } from '../style-manager.service';

export interface SharedStateModel {
  themes: ITheme[];
  selectedTheme: ITheme;
}

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    themes: [],
    selectedTheme: undefined
  }
})
export class SharedState implements NgxsOnInit {

  constructor(
    private store: Store,
    private envService: EnvService,
    private styleManagerService: StyleManagerService
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

  ngxsOnInit(ctx?: StateContext<SharedStateModel>) {
    ctx.patchState({
      themes: this.envService.themes,
      selectedTheme: this.envService.themes.find(t => t.isDefault)
    });

    this.store.select<ITheme>(store => store.shared ? store.shared.selectedTheme : undefined)
    .subscribe(theme => {
      debugger;
      this.styleManagerService.changeTheme(theme);
    });

  }

  @Action(ChangeThemeAction)
  public add(ctx: StateContext<SharedStateModel>, { theme }: ChangeThemeAction) {
    if (theme) {
      ctx.patchState({ selectedTheme: theme });
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
