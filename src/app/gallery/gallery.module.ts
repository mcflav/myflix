import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryVideoDisplayComponent } from "./gallery-video/gallery-video-display/gallery-video-display.component";
import { GalleryVideoComponent } from "./gallery-video/gallery-video.component";
import { GalleryComponent } from "./gallery.component";

@NgModule({
    declarations: [
        GalleryComponent,
        GalleryVideoComponent,
        GalleryVideoDisplayComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule,
        GalleryRoutingModule
        
    ]
})
export class GalleryModule{}