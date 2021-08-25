import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { TrailersRoutingModule } from "./trailers-routing.module";
import { TrailersVideoDisplayComponent } from "./trailers-video/trailers-video-display/trailers-video-display.component";
import { TrailersVideoComponent } from "./trailers-video/trailers-video.component";
import { TrailersComponent } from "./trailers.component";

@NgModule({
    declarations: [
        TrailersComponent,
        TrailersVideoComponent,
        TrailersVideoDisplayComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule,
        TrailersRoutingModule
    ]
})
export class TrailersModule{}