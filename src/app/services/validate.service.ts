import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLogin(username, password) {
    if(username == undefined || 
        password== undefined ||
        !username.trim().length ||
        !password.trim().length){
      return false;
    }else {
      return true;
    }
  }

  validateTodo(taskname) {
    if(taskname == undefined || !taskname.trim().length ){
      return false;
    }else {
      return true;
    }
  }

}
