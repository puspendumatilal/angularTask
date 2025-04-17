import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskForm: FormGroup;
  isEditMode: boolean = false;
  showTaskList: boolean = false;
  tasks: { title: string; description: string }[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.loadTasks();
  }

  onSubmit() {
    if (this.taskForm.invalid) return;

    const taskData = this.taskForm.value;

    if (this.isEditMode && this.editIndex !== null) {
      this.tasks[this.editIndex] = taskData;
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.tasks.push(taskData);
    }

    this.saveTasks();
    this.taskForm.reset();
  }

  editTask(index: number) {
    const task = this.tasks[index];
    this.taskForm.setValue({ title: task.title, description: task.description });
    this.isEditMode = true;
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  toggleTaskList() {
    this.showTaskList = !this.showTaskList;
  }

  loadTasks() {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('tasks');
      this.tasks = stored ? JSON.parse(stored) : [];
    }
  }
  
  saveTasks() {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
