import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { SubscriberService } from './services/subscriber.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth.guard';
//import { CanDeactivateGuard } from './register/can-deactivate-guard.service';
import { TrailerVideosService } from './services/trailerVideos.service';
import { GalleryVideosService } from './services/galleryVideos.service';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryVideoComponent } from './gallery/gallery-video/gallery-video.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreatorsComponent } from './creators/creators.component';
import { AboutComponent } from './about/about.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ProducersComponent } from './producers/producers.component';
import { RegisteredUsersComponent } from './administrator/registered-users/registered-users.component';
import { RegisteredUserComponent } from './administrator/registered-user/registered-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { PlansComponent } from './plans/plans.component';
import { GalleryVideoDisplayComponent } from './gallery/gallery-video/gallery-video-display/gallery-video-display.component';
import { TrailersComponent } from './trailers/trailers.component';
import { TrailersVideoComponent } from './trailers/trailers-video/trailers-video.component';
import { TrailersVideoDisplayComponent } from './trailers/trailers-video/trailers-video-display/trailers-video-display.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AlertComponent } from './alert/alert.component';




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryVideoComponent,
    DropdownDirective,
    HighlightDirective,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CreatorsComponent,
    AboutComponent,
    AdministratorComponent,
    ProducersComponent,
    RegisteredUsersComponent,
    RegisteredUserComponent,
    PageNotFoundComponent,
    HeaderComponent,
    PlansComponent,
    GalleryVideoDisplayComponent,
    TrailersComponent,
    TrailersVideoComponent,
    TrailersVideoDisplayComponent,
    LoadingSpinnerComponent,
    AlertComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ShowHidePasswordModule,
    HttpClientModule
  ],
  providers: [UsersService, SubscriberService, TrailerVideosService, GalleryVideosService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}], //CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
