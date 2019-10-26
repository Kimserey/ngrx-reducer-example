import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsername from './username/username.reducer';
import * as fromRoot from '../app.reducer';

export const userFeatureKey = 'user';

export interface UserState {
  [fromUsername.featureKey]: fromUsername.State;
}

export const reducers = new InjectionToken<ActionReducerMap<UserState>>(userFeatureKey, { 
  factory: () => ({
    [fromUsername.featureKey]: fromUsername.reducer
  })
});

export interface State extends fromRoot.State {
  [userFeatureKey]: UserState;
}

const getUserFeatureState = createFeatureSelector<State, fromUsername.State>(userFeatureKey);

const getUsernameState = createSelector(getUserFeatureState, state => state[fromUsername.featureKey]);

export const getUsername = createSelector(getUsernameState, fromUsername.getUsername);
