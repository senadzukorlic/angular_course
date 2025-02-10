import {
  Component,
  computed,
  Input,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
