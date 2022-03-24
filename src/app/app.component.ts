import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { DataStorageService } from './services/data-storage.service';
import { UsersService } from './services/users.service';
import { Order } from './models/order.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  account: {email: string, firstname: string, lastname: string};
  isAuthenticated = false;
  private userSub: Subscription;
  email;
  firstname;
  lastname;
  planType;
  order: Order[];

  constructor(private dataStorageService: DataStorageService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.account = {
      email: this.route.snapshot.params['email'],
      firstname: this.route.snapshot.params['firstname'],
      lastname: this.route.snapshot.params['lastname']

    }

    this.userSub = this.dataStorageService.user.subscribe(user => {
      this.isAuthenticated = !user ? false: true;
    });
  }

  onLogOut(){
    this.dataStorageService.logOut();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
