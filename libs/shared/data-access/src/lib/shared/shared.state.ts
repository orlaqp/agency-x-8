import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SharedAction } from './shared.actions';

export interface SharedStateModel {
  items: string[];
}

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    items: []
  }
})
export class SharedState {

  @Selector()
  public static getState(state: SharedStateModel) {
    return state;
  }

  @Action(SharedAction)
  public add(ctx: StateContext<SharedStateModel>, { payload }: SharedAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
