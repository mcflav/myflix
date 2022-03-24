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
      })
   }

  onGoToVideos(){
    const planDateForSix = new Date(this.currentPlanDate);
    const planDateForOne = new Date(this.currentPlanDate);
    const planDateForYear = new Date(this.currentPlanDate);

    this.planDate = new Date();

    const addSix = planDateForSix.getMonth();
    const sixMonthExpirationDate = planDateForSix;
    sixMonthExpirationDate.setMonth(6 + Number(addSix));

    const addOne = planDateForOne.getMonth();
    const oneMonthExpirationDate = planDateForOne;
    oneMonthExpirationDate.setMonth(1 + Number(addOne));


    const addYear = planDateForYear.getMonth();
    const oneYearExpirationDate = planDateForYear;
    oneYearExpirationDate.setMonth(12 + Number(addYear));

    const planDateinDb = this.currentPlanDate;

    if(this.currentPlanType === "1month" && this.today >= oneMonthExpirationDate){
      this.error = "Your 1 month subscription has expired. Please select a plan or select the option not to subscribe to a plan.";
    }else if(this.currentPlanType === "6months" && this.today >= sixMonthExpirationDate){
      this.error = "Your 6 months subscription has expired. Please select a plan or select the option not to subscribe to a plan.";
    }else if(this.currentPlanType === "1year" && this.today >= oneYearExpirationDate){
      this.error = "Your 1 year subscription has expired. Please select a plan or select the option not to subscribe to a plan.";
    }else if(this.currentPlanType === "1month" || this.currentPlanType === "6months" || this.currentPlanType === "1year"){
      this.router.navigate(['../gallery', this.account.email, this.account.firstname, this.account.lastname]);
    } else if(this.currentPlanType === "noPlan"){
      this.error = "You have not selected a plan for your account. Please select a plan or select not to subscribe to a plan."
    } else {

    }
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
   this.subscriberService.addOrder(this.newOrder);

   const planDateForSix = new Date(this.currentPlanDate);
   const planDateForOne = new Date(this.currentPlanDate);
   const planDateForYear = new Date(this.currentPlanDate);

   const addSix = planDateForSix.getMonth();
   const sixMonthExpirationDate = planDateForSix;
   sixMonthExpirationDate.setMonth(6 + Number(addSix));

   const addOne = planDateForOne.getMonth();
   const oneMonthExpirationDate = planDateForOne;
   oneMonthExpirationDate.setMonth(1 + Number(addOne));

   const addYear = planDateForYear.getMonth();
   const oneYearExpirationDate = planDateForYear;
   oneYearExpirationDate.setMonth(12 + Number(addYear));

   const planDateinDb = this.currentPlanDate;

   if(this.currentPlanType === "1month" && this.today < oneMonthExpirationDate){
      this.error = "Your current 1 month plan subscription is still active. " +
      "It expires on " + oneMonthExpirationDate;
      this.isLoading = false;
   }else if(this.currentPlanType === "6months" && this.today < sixMonthExpirationDate){
      this.error = "Your current 6 months plan subscription is still active. " +
      "It expires on " + sixMonthExpirationDate;
      this.isLoading = false;
   }else if(this.currentPlanType === "1year" && this.today < oneYearExpirationDate){
      this.error = "Your current 1 year plan subscription is still active. " +
      "It expires on " + oneYearExpirationDate;
      this.isLoading = false;
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
        if(this.planType === "noPlan"){
          this.router.navigate(['../trailers', this.account.email, this.account.firstname, this.account.lastname]);
          this.orderSubmitted = true;
        }else{
          this.router.navigate(['../gallery', this.account.email, this.account.firstname, this.account.lastname]);
          this.orderSubmitted = true;
        }
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

  onHandleError(){
    this.error = null;
  }
}
