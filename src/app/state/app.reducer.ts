import {createReducer, on} from '@ngrx/store';
import {setAppState} from './app.actions';

export const appFeatureKey = 'app';
export interface State {
  appState: any;
}

const initialState = {
  appState: undefined
};

export const reducer = createReducer(initialState,
  on(setAppState, (state, {appState}) => ({
    ...state,
    appState
  }))
);
