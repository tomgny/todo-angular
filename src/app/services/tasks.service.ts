import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../common/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    items: Task[] = [];
    itemsSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
        this.items
    );

    statuses: string[] = ['New', 'In Progress', 'Done'];

    constructor() {
        this.loadTasks();
    }

    loadTasks(): void {
        const tmpTodoItems = JSON.parse(localStorage.getItem('tasks') || '{}');
        tmpTodoItems.forEach((todo: Task) => {
            this.items.push(new Task(todo.text, todo.status));
        });
    }

    addTask(item: Task): void {
        this.items.push(item);
        this.itemsSubject.next(this.items);
        localStorage.setItem('tasks', JSON.stringify(this.items));
    }

    editStatus(status: string, index: number): void {
        this.items[index].status = status;
        this.itemsSubject.next(this.items);
        localStorage.setItem('tasks', JSON.stringify(this.items));
    }

    deleteTask(index: number): void {
        this.items.splice(index, 1);
        this.itemsSubject.next(this.items);
        localStorage.setItem('tasks', JSON.stringify(this.items));
    }
}
