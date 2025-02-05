import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.copomnent';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
