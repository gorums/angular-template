import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
  })
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers()
      .subscribe(data => this.users = data.result);
  }
}
