import { Component, OnInit } from '@angular/core';

import { IUser, UserModel } from './models/user.model';
import { USERS } from './data/users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: UserModel[] = [];

  ngOnInit(): void {
      this.users = USERS.map(user => UserModel.fromJSON(user));
  }

  addUser(user: IUser): void {
    this.users = [UserModel.fromJSON(user), ...this.users];
  }
}
