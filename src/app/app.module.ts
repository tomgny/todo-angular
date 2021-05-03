import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NewTodoComponent,
        TodoComponent,
        TodoListComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
