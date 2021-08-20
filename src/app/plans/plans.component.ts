import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriberService } from '../services/subscriber.service';
import { Order } from '../models/order.model';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  @ViewChild('f') planForm: NgForm;
  account: {email: string, firstname: string, lastname: string};
  planType = 'noPlan';
  currentPlanType;
  currentPlanDate;
  orderSubmitted = false;
  promoCode = 'ABC';
  planCost;
  planDiscount;
  planDate;
  planTotal;
  error: string = null;
  isLoading = false;
  newOrder;
  subscriptId;
  getSubscriptions = [];
  today = new Date();
  
  constructor(private route: ActivatedRoute,
      private router: Router,
      private subscriberService: SubscriberService,
      private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.account = {
      email: this.route.snapshot.params['email'],
      firstname: this.route.snapshot.params['firstname'],
      lastname: this.route.snapshot.params['lastname']

    }
    this.dataStorageService.autoLogin();

    this.dataStorageService.fetchSubscription(this.account.email)
     .subscribe(
      resData => {
        this.subscriberService.setOrder(resData);
        this.getSubscriptions = this.subscriberService.getOrders();

       for (let index = 0; index < this.getSubscriptions.length; index++) {
         if(this.getSubscriptions[index].email === this.account.email){
            this.subscriptId = this.getSubscriptions[index]._id;
            this.currentPlanType = this.getSubscriptions[index].planType;
            this.currentPlanDate = this.getSubscriptions[index].planDate;

            console.log(this.subscriptId);
            console.log(this.currentPlanType);
            console.log(this.currentPlanDate);
          }
        }
        // if(this.currentPlanType !== 'noPlan'){
        //    this.router.navigate(['../gallery', this.account.email, this.account.firstname, this.account.lastname])
        // }
      })
   }

  onSubmit(){
   this.error = null;
   this.isLoading = true;
   if(this.planForm.value.promoCode === "ABC"){
        if(this.planType === "1month"){
          this.account.email;
          this.planCost = 5.00;
          this.planDiscount = 1.00;
          this.planDate = new Date();
          this.planTotal = this.planCost - this.planDiscount;
        }else if(this.planType === "6months"){
          this.account.email;
          this.planCost = 30.00;
          this.planDiscount = 6.00;
          this.planDate = new Date();
          this.planTotal = this.planCost - this.planDiscount;
        }else if(this.planType === "1year"){
          this.account.email;
          this.planCost = 60.00;
          this.planDiscount = 12.00;
          this.planDate = new Date();
          this.planTotal = this.planCost - this.planDiscount;
        }else{
          this.account.email;
          this.planCost = 0;
          this.planDiscount = 0;
          this.planDate = new Date();
          this.planTotal = this.planCost - this.planDiscount;
        }
    }else {
      if(this.planType === "1month"){
        this.account.email;
        this.planCost = 5.00;
        this.planDiscount = 0;
        this.planDate = new Date();
        this.planTotal = this.planCost - this.planDiscount;
      }else if(this.planType === "6months"){
        this.account.email;
        this.planCost = 30.00;
        this.planDiscount = 0;
        this.planDate = new Date();
        this.planTotal = this.planCost - this.planDiscount;
      }else if(this.planType === "1year"){
        this.account.email;
        this.planCost = 60.00;
        this.planDiscount = 0;
        this.planDate = new Date();
        this.planTotal = this.planCost - this.planDiscount;
      }else{
        this.account.email;
        this.planCost = 0;
        this.planDiscount = 0;
        this.planDate = new Date();
        this.planTotal = this.planCost - this.planDiscount;
      }
    }
  
  

  this.newOrder = new Order(this.planType, this.account.email, Number(this.planCost), Number(this.planDiscount), this.planDate.toString(), Number(this.planTotal));
  // this.newOrder = new Order("noPlan", "nc2jax@hotmail.com", 20, 0, "07/12/2021", 20);
   this.subscriberService.addOrder(this.newOrder);

   const planDateForSix = new Date(this.currentPlanDate);
   const planDateForOne = new Date(this.currentPlanDate);
   const planDateForYear = new Date(this.currentPlanDate);

   const addSix = this.planDate.getMonth();
   const sixMonthExpirationDate = planDateForSix;
   sixMonthExpirationDate.setMonth(6 + Number(addSix));

   const addOne = this.planDate.getMonth();
   const oneMonthExpirationDate = planDateForOne;
   oneMonthExpirationDate.setMonth(1 + Number(addOne));

   const addYear = this.planDate.getMonth();
   const oneYearExpirationDate = planDateForYear;
   oneYearExpirationDate.setMonth(12 + Number(addYear));

   const planDateinDb = this.currentPlanDate;

   console.log( " With 6 months added to Plan in DB " + sixMonthExpirationDate);
   console.log( " With 1 month added to Plan in DB " + oneMonthExpirationDate);
   console.log( " With 1 year added to Plan in DB " + oneYearExpirationDate);
   console.log("Plan date in Database: " + planDateinDb);

   if(this.currentPlanType === "1month" && this.today < oneMonthExpirationDate){
      this.error = "Your current 1 month plan subscription is still active. " +
      "It expires on " + oneMonthExpirationDate;
   }else if(this.currentPlanType === "6months" && this.today < sixMonthExpirationDate){
    this.error = "Your current 6 months plan subscription is still active. " +
      "It expires on " + sixMonthExpirationDate;
   }else if(this.currentPlanType === "1year" && this.today < oneYearExpirationDate){
    this.error = "Your current 1 year plan subscription is still active. " +
      "It expires on " + oneYearExpirationDate;
   }else if((this.currentPlanType === "1month" && this.today >= oneMonthExpirationDate) ||
   (this.currentPlanType === "6months" && this.today >= sixMonthExpirationDate) ||
   (this.currentPlanType === "1Year" && this.today >= oneYearExpirationDate)){
      this.UpdateSubscription();
   }else if(this.currentPlanType === "noPlan" && this.planType !== "noPlan"){
      this.UpdateSubscription();
   }else if (this.planType === "noPlan"){
      this.isLoading = false;
      this.router.navigate(['../trailers', this.account.email, this.account.firstname, this.account.lastname])
      this.orderSubmitted = true;
   }
}

 UpdateSubscription(){
  this.dataStorageService.updateSubscription(this.subscriptId, this.newOrder)
  .subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['../gallery', this.account.email, this.account.firstname, this.account.lastname])
        this.orderSubmitted = true;
      },
      errorMessage => {
          this.isLoading = false;
          console.log(errorMessage);
          this.error = errorMessage;
      }
  );
}

  changePlan(e){
    this.planType = e.target.value;
  }
}
