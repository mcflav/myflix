import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { LoginComponent } from "./login.component";

NgModule({
    declarations: [
        LoginComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([{ path: 'login', component: LoginComponent },])

    ]
})
export class LoginModule{}