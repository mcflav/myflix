import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { AdministratorRoutingModule } from "./administrator-routing.module";
import { AdministratorComponent } from "./administrator.component";
import { RegisteredUserComponent } from "./registered-user/registered-user.component";
import { RegisteredUsersComponent } from "./registered-users/registered-users.component";

@NgModule({
    declarations: [
        AdministratorComponent,
        RegisteredUsersComponent,
        RegisteredUserComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule,
        AdministratorRoutingModule
    ]
})
export class AdministratorModule{}