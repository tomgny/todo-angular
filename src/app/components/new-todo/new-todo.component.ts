import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'app-new-todo',
    templateUrl: './new-todo.component.html',
    styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {
    taskText!: string;

    constructor(private taskService: TasksService) {}

    addNewTodo(text: string): void {
        if (!text) {
            return alert('ToDo element is empty!');
        }

        this.taskService.addTask(new Task(text, 'New'));
        this.taskText = '';
    }
}
