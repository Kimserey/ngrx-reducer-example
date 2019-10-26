import { createAction, props } from '@ngrx/store';

export const update = createAction(
  '[User - Username] Update',
  props<{ name: string }>()
);

export const reset = createAction('[User - Username] Reset');
