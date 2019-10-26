import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromUsernameActions from '../user/username/username.actions';
import * as fromUser from './user.reducer';

@Component({
  template: `
    <div>{{username$ | async}}</div>
    <button (click)="handleUpdate()">Update</button>
    <button (click)="handleReset()">Reset</button>
  `
})
export class UserComponent {
  username$: Observable<string>;
  
  constructor(private store: Store<fromUser.State>) {
    this.username$ = store.pipe(
      select(fromUser.getUsername)
    );
  }

  handleUpdate() {
    this.store.dispatch(fromUsernameActions.update({ name: 'Updated!' }));
  }

  handleReset() {
    this.store.dispatch(fromUsernameActions.reset());
  }
}
