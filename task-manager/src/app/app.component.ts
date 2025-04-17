import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
}
