import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  [x: string]: any;
  public todo: string = 'sleep now now';
  public newTodo: string = '';
  public displayForm: boolean = false;
  public ind: number = 0;
  public userInfo: Array<{
    username: string;
    email: string;
    course: string;
    location: string;
  }> = JSON.parse(localStorage.getItem('userInfo')!) || [];
  
  public newUser = {
    username: '',
    email: '',
    location: '',
    course: '',
  };
  public newUserEdit = {
    username: '',
    email: '',
    location: '',
    course: '',
  };
  writeTodo() {
    console.log(this.userInfo);
  }
  addusers() {
    if (
      this.newUser.username &&
      this.newUser.email &&
      this.newUser.location &&
      this.newUser.course
    ) {
      this.userInfo.push(this.newUser);
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      this.newUser = {
        username: '',
        email: '',
        course: '',
        location: '',
      };
    }
    this.displayForm = false;
    console.log(this.userInfo);
  
      this.router.navigate(['nav'])
  }

  editUser(i: number) {
    console.log(i);
    this.ind = 1;
    console.log(i);

    this.displayForm = true;
    console.log(this.userInfo[i]);
    this.newUserEdit = this.userInfo[i];
  }
  editUserInfo() {
    this.userInfo[this.ind] = this.newUserEdit;
    console.log(this.userInfo);
    this.displayForm = true;
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    this.newUserEdit = {
      username: '',
      email: '',
      course: '',
      location: '',
    };
  }
  delUser(i: number) {
    this.userInfo.splice(i, 1);
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
  }

  constructor(public router: Router){}
  
}
