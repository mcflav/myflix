import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CreatorsComponent } from "./creators.component";
import {AuthGuard} from '../services/auth.guard';
import { SharedModule } from "../shared.module";

@NgModule({
    declarations: [
        CreatorsComponent
    ],
    
    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([ { path: 'creators', component: CreatorsComponent, canActivate: [AuthGuard] },])
    ]
})
export class CreatorsModule{}