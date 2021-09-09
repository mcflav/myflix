import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';
import { SubscriberService } from '../services/subscriber.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  users = [];
  subscriptions = [];
  user = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }
   
  //id;
  validLogin = false;
  showInvalidMessage = false;
  userValid = false;
  isLoading = false;
  error: string = null;
  hasPlan = false;
  planDateForSix;
  planDateForOne;
  planDateForYear;
  planType;
  today = new Date();
  oneMonthExpirationDate
  sixMonthExpirationDate
  yearExpirationDate
 
  constructor( private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private subscriberService: SubscriberService,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

 



}
