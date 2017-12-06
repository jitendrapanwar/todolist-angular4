import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { LoginModel } from './LoginModel';
import { TodoStorage } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  userpassword:string;
  todoStorage = new TodoStorage();

  constructor(private router: Router,
    private flashMessagesService:FlashMessagesService,
    private validateService:ValidateService) { }

  onSubmit() {
    if(!this.validateService.validateLogin(this.username, this.userpassword)){
      this.flashMessagesService.show('Please enter user details',{
      classes:['alert','alert-danger'], timeout: 3000
    })
    return false;
    }
    this.todoStorage.setLogin(new LoginModel(this.username, this.userpassword));

    this.router.navigate(['todolist'])

  }
  ngOnInit() {
    // this.user = {
    //   name:'',
    //   password:''
    // }
  }
}

// interface LoginUser {
//     name:string,
//     password:string
//   }
