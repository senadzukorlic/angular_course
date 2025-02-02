import {
  Component,
  computed,
  Input,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
