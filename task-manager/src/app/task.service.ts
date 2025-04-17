import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>(this.getTasksFromLocalStorage());
  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  getTasksFromLocalStorage(): Task[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.tasksSubject.next(tasks);
  }

  addTask(task: Task): void {
    const tasks = this.getTasksFromLocalStorage();
    tasks.push(task);
    this.saveTasksToLocalStorage(tasks);
  }

  deleteTask(taskId: number): void {
    let tasks = this.getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    this.saveTasksToLocalStorage(tasks);
  }

  editTask(updatedTask: Task): void {
    const tasks = this.getTasksFromLocalStorage();
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index > -1) {
      tasks[index] = updatedTask;
      this.saveTasksToLocalStorage(tasks);
    }
  }
}
