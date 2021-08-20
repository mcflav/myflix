import { Component, OnInit, ViewChild} from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../services/data-storage.service';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user = {
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: '',
    birthday: '',
    gender: ''
  }
  registeredUsers = [];
  registeredUser: {email: string, firstname: string, lastname: string, password: string };
  submitted = false;
  changesSaved = false;
  genders = ['male', 'female'];
  emailExsist = false;
  passMatch = true;
  error: string = null;
  planType = "noPlan";
  planCost = 0
  planDiscount = 0;
  planDate;
  date = new Date()
  planTotal = 0;
 
  constructor(private usersService: UsersService,
  private route: ActivatedRoute,
  private router: Router,
  private dataStorageService: DataStorageService,
  private subscriberService: SubscriberService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchUsers()
      .subscribe(data => {
          if(data !== null){
              this.usersService.setUsers(data);
          }
      },
      errorMessage => {
          this.error = errorMessage;
      })
  }

  onHandleError(){
    this.error = null;
  }

  onSubmit(){
    this.error = null;
    this.emailExsist = false;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.confirmPassword = this.registerForm.value.confirmPassword;
    this.user.firstname = this.registerForm.value.firstname;
    this.user.lastname = this.registerForm.value.lastname;
    this.user.birthday = this.registerForm.value.birthday;
    this.user.gender = this.registerForm.value.gender;
    this.registeredUsers = this.usersService.getUsers();

    for(var i = 0; i < this.registeredUsers.length; i++){
      if(this.registeredUsers[i].email === this.user.email){
        this.emailExsist = true;
      }
    }

    if(this.user.password !== this.user.confirmPassword){
      this.passMatch = false;
    } else {
      this.passMatch = true;

      if(this.emailExsist === false){
        this.usersService.addUser({email: this.user.email, firstname: this.user.firstname, lastname: this.user.lastname, 
        password: this.user.password, birthday: this.user.birthday, gender: this.user.gender });
        
        this.dataStorageService.storeUser({email: this.user.email, firstname: this.user.firstname, lastname: this.user.lastname, 
          password: this.user.password, birthday: this.user.birthday, gender: this.user.gender })
            .subscribe(
              resData => {
                this.planDate = this.date.getMonth()+1 + '/' +  this.date.getDate() + '/' + this.date.getFullYear(); 
                
                this.dataStorageService.storeSubscription({ planType: this.planType, email: this.user.email, 
                  planCost: Number(this.planCost), planDiscount: Number(this.planDiscount),
                  planDate: this.planDate, planTotal: Number(this.planTotal)})
                    .subscribe(
                        resData => {
                          console.log(resData)
                        },
                        errorMessage => {
                          this.error = errorMessage;
                        }
                    );

                this.router.navigate(['../login'], {relativeTo: this.route});
              },
              errorMessage => {
                this.error = errorMessage;
              }
            );
      }else if(this.emailExsist === true){
          this.error = "This email already exsist in the system. Please choose a different email address.";
      }
    }
  }
}
