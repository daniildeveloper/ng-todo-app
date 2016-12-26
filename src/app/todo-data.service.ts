import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  /**
   * placeholder for last id so we can simulate 
   * automatic incrementing of id
   */
  lastId: number = 0;

  /** 
   * placeholder for todos
   */
  todos: Todo[] = [];

  constructor() { }

  /**
   * simulate POST/todos
   */
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  /**
   * simulate delete todos/:id
   */
  deleteTodoById(id: number): TodoDataService {
    console.log(this.getTodoById(id).title);
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  /**
   * simulate PUT /todos/:id
   */
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);

    if (!todo) {
      return null;
    }

    Object.assign(todo, values);

    return todo;
  }

  /**
   * simulate get all todos
   */
  getAllTodos(): Todo[] {
    return this.todos;
  }
  /**
   * simulate get todos/:id/
   */
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  /**
   * make todo complete or not
   */
  toggleTodoComplete(todo: Todo): Todo {
    let updatedTodo = this.updateTodoById(todo.id, { complete: !todo.complete });
    return updatedTodo;
  }

}
