import { TodoModel } from "../todolist/TodoModel";
import { LoginModel } from '../login/LoginModel';

export class TodoStorage {

    constructor(){}
    
    LOGINDATA = "logindata"
    TODOITEMS = 'todoitems';
    USERLOGGED = 'userlogged'

    getTodos (): TodoModel[] {
        return JSON.parse(localStorage.getItem(this.TODOITEMS) || '[]');
    }

    setTodos(todos: TodoModel[]) {
        localStorage.setItem(this.TODOITEMS, JSON.stringify(todos));
    }

    setLogin(user:LoginModel) {
        localStorage.setItem(this.LOGINDATA, JSON.stringify(user));
        localStorage.setItem(this.USERLOGGED, 'true');
    }

    getLogin(): LoginModel {
        return JSON.parse(localStorage.getItem(this.LOGINDATA));
    }

    logoutUser() {
        localStorage.setItem(this.USERLOGGED, 'false');
        //localStorage.removeItem(this.LOGINDATA);
    }

    isLogin() {
        const result = localStorage.getItem(this.USERLOGGED);
        if(result == 'false') return false;
        return true;
        }
}
