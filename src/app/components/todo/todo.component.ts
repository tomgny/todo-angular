import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    @Input() currentStatus!: string;
    @Input() text!: string;
    @Output() editItemStatus = new EventEmitter();
    @Output() deleteItem = new EventEmitter();

    statuses: string[] = [];

    constructor(private taskService: TasksService) {}

    ngOnInit(): void {
        this.statuses = this.taskService.statuses;
    }

    changeStatus($event: string): void {
        this.currentStatus = $event;
        this.editItemStatus.emit($event);
    }

    remove(): void {
        this.deleteItem.emit();
    }
}
