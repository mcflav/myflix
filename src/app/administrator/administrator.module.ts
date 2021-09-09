import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShowHidePasswordModule } from "ngx-show-hide-password";
import { SharedModule } from "../shared.module";
import { AdministratorComponent } from "./administrator.component";

@NgModule({
    declarations: [
        AdministratorComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        ShowHidePasswordModule,
        RouterModule.forChild([{ path: '', component: AdministratorComponent }])
        
    ]
})
export class AdministratorModule{}