import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  click = output<string>();

  onClick() {
    return this.click.emit(this.name);
  }
}
