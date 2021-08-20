import { Order } from '../models/order.model';
import { Subject } from 'rxjs';


export class SubscriberService {
    orderChanged = new Subject<Order[]>();
    private order: Order[] = [];
    

    setOrder(order) {
        this.order = order;
        this.orderChanged.next(this.order);
    }
    

    getOrders() {
        return this.order.slice();
    }

    addOrder(order: Order){
        this.order.push(order);
        this.orderChanged.next(this.order.slice());
    }

    getPlanType(email: string){
        for(var i = 0; i < this.order.length; i++){
            if(this.order[i].email === email){
                return this.order[i].planType;
            }
        }
        return "noPlan";
    }

   

    updateOrder(index: number, newOrder: Order){
        this.order[index] = newOrder;
        this.orderChanged.next(this.order.slice());
    }



}