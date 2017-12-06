import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'ngx-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';

import { ValidateService } from './services/validate.service';

const appRoutes = [
  {path: '', component: HomeComponent, pathMatch:"full"},
  {path: 'login', component: LoginComponent},
  {path: 'todolist', component: TodolistComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
