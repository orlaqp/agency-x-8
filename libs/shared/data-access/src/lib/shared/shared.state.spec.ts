import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedState, SharedStateModel } from './shared.state';
import { SharedAction } from './shared.actions';

describe('Shared store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SharedState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: SharedStateModel = {
      items: ['item-1']
    };
    store.dispatch(new SharedAction('item-1'));
    const actual = store.selectSnapshot(SharedState.getState);
    expect(actual).toEqual(expected);
  });

});
