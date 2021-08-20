export class Order {
    public planType: string;
    public email: string;
    public planCost: number;
    public planDiscount: number;
    public planDate: string;
    public planTotal: number;

    constructor(planType: string, email: string, planCost: number, planDiscount: number, planDate: string, planTotal: number){
        this.planType = planType;
        this.email = email;
        this.planCost = planCost;
        this.planDiscount = planDiscount;
        this.planDate = planDate;
        this.planTotal = planTotal;
    }
}