import { Action, createReducer, on } from '@ngrx/store';
import { update, reset } from './username.actions';

export const featureKey = 'username';

export interface State {
  name: string;
}

export const initialState: State = {
  name: 'Kimserey'
};

const _reducer = createReducer(initialState,
  on(update, (_, props) => ({ name: props.name })),
  on(reset, () => initialState)
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}

export const getUsername = (state: State) => state.name;