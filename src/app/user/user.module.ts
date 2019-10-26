import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromUser from './user.reducer';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducers),
    EffectsModule.forFeature([])
  ],
  providers: []
})
export class UserModule { }
