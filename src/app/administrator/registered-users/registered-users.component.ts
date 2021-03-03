import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
        id: '1',
        firstname: 'Tommy',
        lastname: 'Berry',
        email: 'TommyB@gmail.com'
    },
    {
        id: '2',
        firstname: 'Bilal',
        lastname: 'Jones',
        email: 'BJ@gmail.com'
    },
    {
        id: '3',
        firstname: 'Terrine',
        lastname: 'Howard',
        email: 'rineb@gmail.com'
    },
    {
        id: '4',
        firstname: 'Terry',
        lastname: 'Barnes',
        email: 'brown@gmail.com'
    },
    {
        id: '5',
        firstname: 'Chris',
        lastname: 'Kaban',
        email: 'cuzzo@gmail.com'
    }
];

}
