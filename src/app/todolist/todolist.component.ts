import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import { ValidateService } from '../services/validate.service';
import { TodoModel } from './TodoModel';
import { TodoStorage } from '../services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  task: TodoModel;
  taskname: string;
  tasks: TodoModel[] = [];
  originalTasks:TodoModel[] = [];
  todoStorage = new TodoStorage();
  loginStatus:boolean = false;
  
  constructor(private validateService:ValidateService, 
    private flashMessages: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.loginStatus = this.todoStorage.isLogin();
    console.log(this.todoStorage.isLogin())

    if(this.loginStatus){
      this.tasks = this.todoStorage.getTodos()
      this.originalTasks  = Array.from(this.tasks);
    }else {
      this.router.navigate(['login']);
    }
  }

  onSelectTodo() {
    this.todoStorage.setTodos(this.tasks)
  }

  onAddTask(){
    if(!this.validateService.validateTodo(this.taskname)){
      this.flashMessages.show('Please enter task name', {
        classes: ['alert', 'alert-danger'],
        timeout: 3000})
        return false;
    }
    
    this.tasks.unshift(new TodoModel(this.taskname, false))
    this.originalTasks  = Array.from(this.tasks);
    this.taskname =""
    this.todoStorage.setTodos(this.tasks)
  }

  onDeleteTask(taskData: TodoModel){
    const index= this.getTaskIndex(taskData);
    this.tasks.splice(index,1)
    this.originalTasks.splice(index,1)
    this.todoStorage.setTodos(this.tasks)
  }

  getTaskIndex(taskData: TodoModel) {
    return this.tasks.findIndex((task) =>  task.title === taskData.title);
  }

  onLogoutClick() {
    this.todoStorage.logoutUser(); 
    this.router.navigate([''])
  }
}
