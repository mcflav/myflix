import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { SubscriberService } from '../services/subscriber.service';
import { Users } from '../models/users.model';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface UserResponseData {
    email: string;
    firstname: string,
    lastname: string,
    isAdmin: boolean
}

export interface ValidateUserResponseData {
    auth: boolean,
    token: string
}

interface SubscriptionResponseData {
    id?: string,
    planType: string,
    email: string,
    planCost: number,
    planDiscount: number,
    planDate: Date,
    planTotal: number
}


@Injectable({providedIn: 'root'})
export class DataStorageService{
    user = new BehaviorSubject<User>(null);
    subscriptions: [] = [];
    private tokenExpirationTimer: any;
    private _expirationDate = new Date(
        new Date().getTime() + 86400 * 1000
    );

    constructor(private http: HttpClient,
        private usersService: UsersService,
        private subscriberService: SubscriberService,
        private router: Router){}
        
    storeUser(user: Users){
        const body = user;
        return this.http.post<UserResponseData>('https://sheltered-cliffs-22371.herokuapp.com/api/v1/users',
        body).pipe(catchError(this.handleError));
    }

    storeSubscription(order: Order){
        const body = order;
        return this.http.post<SubscriptionResponseData>('https://sheltered-cliffs-22371.herokuapp.com/api/v1/subscription',
        body).pipe(catchError(this.handleError));
    }

    updateSubscription(id: string, order: Order){
        const body = order;
        return this.http.put<SubscriptionResponseData>('https://sheltered-cliffs-22371.herokuapp.com/api/v1/subscription/' + id,
        body).pipe(catchError(this.handleError)); 

    }

    fetchUsers(){
        return this.http.get<Users[]>('https://sheltered-cliffs-22371.herokuapp.com/api/v1/users')
            .pipe(catchError(this.handleError));
    }

    fetchSubscription(email: string){
        return this.http.post('https://sheltered-cliffs-22371.herokuapp.com/api/v1/subscription/getSubscription',
            {
                email: email
            }
        ).pipe(catchError(this.handleError));
    }

    validateUser(email: string, password: string){
        return this.http.post<ValidateUserResponseData>('https://sheltered-cliffs-22371.herokuapp.com/api/v1/authentication',
            {
                email: email,
                password: password
            }
        ).pipe(catchError(this.authenticationError),
            tap(resData => {
                this.handleAuthentication(
                    resData.auth,
                    resData.token
                 );
            })
        );
    }

    autoLogin(){
        const userData: {
            auth: boolean;
            _token: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return;
        }

        const loadedUser = new User(
            userData.auth,
            userData._token,
            this._expirationDate
        );

        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration =
                new Date(this._expirationDate).getTime() - new Date().getTime();
        }
    }

    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationDuration);
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    private handleAuthentication(auth: boolean, token:string){
        const expirationDate = new Date(
            new Date().getTime() + 86400 * 1000
        );

        const user = new User(
            auth,
            token,
            expirationDate    
        );

        this.user.next(user);
        this.autoLogout(86400 * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse){
        const errorMessage = errorRes.error;
        return throwError(errorMessage);
    }

    private authenticationError(errorRes: HttpErrorResponse){
        let errorMessage;
        if(errorRes.status === 400 || (errorRes.status === 401 && errorRes.error.token !== null) ||
        (errorRes.status === 401 && errorRes.error.token === null)){
            errorMessage = "Invalid Username or Password.";
        } 
        return throwError(errorMessage);
    }
}