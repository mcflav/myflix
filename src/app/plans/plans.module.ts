import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PlansComponent } from "./plans.component";
import { AuthGuard } from '../services/auth.guard';
import { SharedModule } from "../shared.module";

@NgModule({
    declarations: [
        PlansComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([ { path: '', component: PlansComponent, canActivate: [AuthGuard] },])
    ]
})
export class PlansModule{}