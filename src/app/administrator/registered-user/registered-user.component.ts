import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get params from route (users/id/name route)
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    
     console.log(this.user.id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.user.id = params['id'];
    //       this.user.name = params['name'];
    //     }
    //   );
  }

}
