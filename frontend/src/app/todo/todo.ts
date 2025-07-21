import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  providers: [TodoService],
})
export class Todo implements OnInit {
  newTask = '';
  tasks: { _id?: string; name: string; done: boolean; editing: boolean }[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe({
      next: (data: any[]) => {
        this.tasks = data.map((todo) => ({
          ...todo,
          editing: false,
        }));
      },
      error: (err) => console.error('Fetch error:', err),
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.todoService.createTodo(this.newTask.trim()).subscribe({
        next: (newTodo: any) => {
          this.tasks.unshift({ ...newTodo, editing: false });
          this.newTask = '';
        },
        error: (err) => console.error('Add error:', err),
      });
    }
  }

  deleteTask(index: number) {
    const todo = this.tasks[index];
    if (!todo._id) return;

    this.todoService.deleteTodo(todo._id).subscribe({
      next: () => {
        this.tasks.splice(index, 1);
      },
      error: (err) => console.error('Delete error:', err),
    });
  }

  editTask(index: number) {
    this.tasks[index].editing = true;
  }

  saveTask(index: number) {
    const task = this.tasks[index];
    if (!task._id) return;

    this.todoService
      .updateTodo(task._id, { name: task.name, done: task.done })
      .subscribe({
        next: (updated: any) => {
          this.tasks[index] = { ...updated, editing: false };
        },
        error: (err) => console.error('Update error:', err),
      });
  }

  markDone(index: number) {
    const task = this.tasks[index];
    if (!task._id) return;

    this.todoService
      .updateTodo(task._id, { name: task.name, done: true })
      .subscribe({
        next: (updated: any) => {
          this.tasks[index].done = true;
        },
        error: (err) => console.error('Mark done error:', err),
      });
  }

  undoTask(index: number) {
    const task = this.tasks[index];
    if (!task._id) return;

    this.todoService
      .updateTodo(task._id, { name: task.name, done: false })
      .subscribe({
        next: (updated: any) => {
          this.tasks[index].done = false;
        },
        error: (err) => console.error('Undo error:', err),
      });
  }
}
