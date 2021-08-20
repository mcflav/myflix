import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
    users = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
      this.users = this.usersService.getUsers();

  }

  

}
