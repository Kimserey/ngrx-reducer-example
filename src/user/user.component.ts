import { Component, Input } from '@angular/core';

@Component({
    template: `
      <div>{{username}}</div>
      <button (click)="handleUpdate()">Update</button>
      <button (click)="handleReset()">Reset</button>
    `
})
export class UserComponent {
    username;
    
    constructor() {
        this.username = 'Kimserey';        
    }

    handleUpdate() {
    }

    handleReset() {
    }
}
