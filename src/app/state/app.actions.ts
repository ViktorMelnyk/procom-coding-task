import {createAction, props} from '@ngrx/store';

export const setAppState = createAction('[Form App] set app state', props<{appState: any}>());

