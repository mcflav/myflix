import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { GalleryVideosService } from "./services/galleryVideos.service";
import { SubscriberService } from "./services/subscriber.service";
import { TrailerVideosService } from "./services/trailerVideos.service";
import { UsersService } from "./services/users.service";

@NgModule({
    providers: [
        UsersService, 
        SubscriberService, 
        TrailerVideosService, 
        GalleryVideosService, 
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true
        }
    ] 
})
export class CoreModule{}