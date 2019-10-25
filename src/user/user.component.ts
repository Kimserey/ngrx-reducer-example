import { Component, Input } from '@angular/core';

@Component({
    template: "<div>{{username}}</div>"
})
export class UserComponent {
    username;
    constructor() {
        this.username = 'Kimserey';        
    }
}
