import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { SubscriberService } from '../services/subscriber.service';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
 
 //subscriber: {planType: string, email: string, planCost: number, planDiscount: number, planDate: string, planTotal: number}

  constructor( private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private subscriberService: SubscriberService,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchUsers()
      .subscribe(data => {
          if(data !== null){
              this.usersService.setUsers(data);
          }
      },
      errorMessage => {
          this.error = errorMessage;
      });       
  }

  onSubmit(){
    this.hasPlan = false;
    this.isLoading = true;
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.dataStorageService.validateUser(this.user.email, this.user.password)
      .subscribe(data => {
          this.isLoading = false;
          this.error = null;
          this.isUserValid(data.auth);
      },
      errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
      });
  }

  isUserValid(isValid: boolean){
      this.userValid = isValid;
      if(this.userValid){
          this.validLogin = true;
          this.showInvalidMessage = false;
          this.users = this.usersService.getUsers();
          for(var i = 0; i < this.users.length; i++){
              if(this.users[i].email === this.user.email){
                  this.user.firstname = this.users[i].firstname;
                  this.user.lastname = this.users[i].lastname;
              }
          }

          this.dataStorageService.fetchSubscription(this.user.email)
            .subscribe(data => {
                const today = new Date();
                             
                             
               this.subscriberService.setOrder(data);
                this.subscriptions = this.subscriberService.getOrders();
                for(var i = 0; i < this.subscriptions.length; i++){
                    if(this.subscriptions[i].email === this.user.email && this.subscriptions[i].planType !== "noPlan"){
                        this.planDateForSix = new Date(this.subscriptions[i].planDate);
                        this.planDateForOne = new Date(this.subscriptions[i].planDate);
                        this.planDateForYear = new Date(this.subscriptions[i].planDate);
                     
                        const addSix = this.planDateForSix.getMonth();
                        this.sixMonthExpirationDate = this.planDateForSix;
                        this.sixMonthExpirationDate.setMonth(6 + Number(addSix));

                        const addOne = this.planDateForOne.getMonth();
                        this.oneMonthExpirationDate = this.planDateForOne;
                        this.oneMonthExpirationDate.setMonth(1 + Number(addOne));

                        const addYear = this.planDateForYear.getMonth();
                        this.yearExpirationDate = this.planDateForYear;
                        this.yearExpirationDate.setMonth(12 + Number(addYear));

                        if(this.subscriptions[i].planType === "1month"){
                            this.planType = "1mth"
                        }else if(this.subscriptions[i].planType === "6months"){
                            this.planType = "6mths"
                        }else if(this.subscriptions[i].planType === "1Year"){
                            this.planType = "1yr"
                        }
                     
                        this.hasPlan = true;
                        
                    }
                }
               
                if(this.hasPlan === true && this.planType === "1mth" && this.today >= this.oneMonthExpirationDate){
                    this.router.navigate(['../plans', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
                }else if(this.hasPlan === true && this.planType === "6mths" && this.today >= this.sixMonthExpirationDate){
                    this.router.navigate(['../plans', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
                }else if(this.hasPlan === true && this.planType === "1yr" && this.today >= this.yearExpirationDate){
                    this.router.navigate(['../plans', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
                }else if(this.hasPlan === true){
                   this.router.navigate(['../gallery', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
                } else {
                    this.router.navigate(['../plans', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
                }
            },
            errorMessage => { 
                this.error = errorMessage;
            });
        }
   }

   onHandleError(){
       this.error = null;
   }
}
