import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() name: string | undefined;
  @Output() click = new EventEmitter();
  // click = output<string>();

  onClick() {
    return this.click.emit(this.name);
  }
}
