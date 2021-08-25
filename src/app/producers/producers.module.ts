import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { ProducersComponent } from "./producers.component";

@NgModule({
    declarations: [
        ProducersComponent  
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([{ path: 'producers', component: ProducersComponent },])
    ]
})
export class ProducersModule{}