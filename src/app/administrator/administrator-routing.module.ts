import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministratorComponent } from "./administrator.component";
import { RegisteredUserComponent } from "./registered-user/registered-user.component";
import { RegisteredUsersComponent } from "./registered-users/registered-users.component";

const routes: Routes = [
    { path: 'administrator', component: AdministratorComponent },
    { path: 'users', component: RegisteredUsersComponent, children:[
      { path: ':id/:name', component: RegisteredUserComponent }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule{}