import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AuthGuard} from '../services/auth.guard';
import { GalleryVideoDisplayComponent } from "./gallery-video/gallery-video-display/gallery-video-display.component";
import { GalleryVideoComponent } from "./gallery-video/gallery-video.component";
import { GalleryComponent } from "./gallery.component";

const routes: Routes = [
    { path: '', component: GalleryComponent, canActivate: [AuthGuard] },
    { path: 'videoGallery', component: GalleryVideoComponent, children:[
        { path: ':id/:email/:firstname/:lastname', component: GalleryVideoDisplayComponent, canActivate: [AuthGuard] },
    ] }   
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalleryRoutingModule{}