import { Users } from '../models/users.model';
import { Subject } from 'rxjs';

export class UsersService{
    usersChanged = new Subject<Users[]>();

    private users: Users[] = [];

    setUsers(users: Users[]){
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    
    getUsers() {
        return this.users.slice();
    }

    getUser(email: string){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].email === email){
                return this.users;
            }
        }
        // const user = this.users.find(
        //    (u) => {
        //        return u.email === email;
        //     }
        // );
        // return user;
    }

    addUser(user: Users) {
       this.users.push(user);
       this.usersChanged.next(this.users.slice());
    }
}