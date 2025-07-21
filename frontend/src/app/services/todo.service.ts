// src/app/services/todo.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TodoItem {
  _id?: string;
  name: string;
  done?: boolean;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoApiUrl = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) {}

  // GET all todos
  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoApiUrl);
  }

  // CREATE a new todo
  createTodo(name: string): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.todoApiUrl, { name });
  }

  // UPDATE a todo by id
  updateTodo(id: string, updatedData: Partial<TodoItem>): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.todoApiUrl}/${id}`, updatedData);
  }

  // DELETE a todo by id
  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.todoApiUrl}/${id}`);
  }
}
