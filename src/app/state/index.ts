import * as fromApp from './app.reducer';
import {Action, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {InjectionToken} from '@angular/core';

export interface State {
  [fromApp.appFeatureKey]: fromApp.State;
}

export const metaReducers: MetaReducer<State>[] = [];

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'Root reducers token', {
    factory: () => ({
      [fromApp.appFeatureKey]: fromApp.reducer
    })
  }
);
