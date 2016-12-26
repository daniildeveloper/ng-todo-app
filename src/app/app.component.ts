import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})
export class AppComponent {
  newTodo: Todo = new Todo();

  todos: Todo[] = this.getTodos();

  /**
   * Ask NG dependency systen to inject the dependency
   * associted with the dependency injection token `TodoDataService`
   * and assign it to the property called todoDataService.
   */
  constructor(private todoDataService: TodoDataService) {

  }

  /**
   * in view used implemented methods
   */
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    // console.log('Removed' + todo.id);
    this.todoDataService.deleteTodoById(todo.id);
    this.getTodos();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  getTodos() {
    return this.todoDataService.getAllTodos();
  }
}
