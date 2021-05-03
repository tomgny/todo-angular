import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/common/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    items: Task[] = [];
    itemsSubscription!: Subscription;

    constructor(private taskService: TasksService) {}

    ngOnInit(): void {
        this.itemsSubscription = this.taskService.itemsSubject.subscribe(
            items => {
                this.items = items;
            }
        );
    }

    editStatus($event: string, index: number): void {
        this.taskService.editStatus($event, index);
    }

    deleteTask(index: number): void {
        this.taskService.deleteTask(index);
    }
}
