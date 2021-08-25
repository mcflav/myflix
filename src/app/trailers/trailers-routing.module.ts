import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../services/auth.guard";
import { TrailersVideoDisplayComponent } from "./trailers-video/trailers-video-display/trailers-video-display.component";
import { TrailersVideoComponent } from "./trailers-video/trailers-video.component";
import { TrailersComponent } from "./trailers.component";

const routes: Routes = [
    { path: 'trailers/:email/:firstname/:lastname', component: TrailersComponent, canActivate: [AuthGuard] },
    { path: 'videoTrailers', component: TrailersVideoComponent, children:[
      { path: ':id', component: TrailersVideoDisplayComponent, canActivate: [AuthGuard] }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class TrailersRoutingModule{}