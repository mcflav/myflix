import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { AboutComponent } from "./about.component";

@NgModule({
    declarations: [
        AboutComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([{ path: 'about', component: AboutComponent }])
    ]
})
export class AboutModule{}