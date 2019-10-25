import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, combineReducers } from '@ngrx/store';
import * as fromUsername from './username/username.reducer';

export const userFeatureKey = 'user';

export interface UserState {
  [fromUsername.featureKey]: fromUsername.State;
}

export const reducers = new InjectionToken<ActionReducerMap<UserState>>(userFeatureKey, { 
  factory: () => ({
    [fromUsername.featureKey]: fromUsername.reducer
  })
});

