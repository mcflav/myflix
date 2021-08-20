import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreatorsComponent } from './creators/creators.component';
import { ProducersComponent } from './producers/producers.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { RegisteredUsersComponent } from './administrator/registered-users/registered-users.component';
import { RegisteredUserComponent } from './administrator/registered-user/registered-user.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TrailersComponent } from './trailers/trailers.component';
import { GalleryVideoComponent } from './gallery/gallery-video/gallery-video.component';
//import { CanDeactivateGuard } from './register/can-deactivate-guard.service';
import { PlansComponent } from './plans/plans.component';
import { GalleryVideoDisplayComponent } from './gallery/gallery-video/gallery-video-display/gallery-video-display.component';
import { TrailersVideoComponent } from './trailers/trailers-video/trailers-video.component';
import { TrailersVideoDisplayComponent } from './trailers/trailers-video/trailers-video-display/trailers-video-display.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard]},
    { path: 'register', component: RegisterComponent },
    { path: 'plans/:email/:firstname/:lastname', component: PlansComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'creators', component: CreatorsComponent, canActivate: [AuthGuard] },
    { path: 'producers', component: ProducersComponent },
    { path: 'administrator', component: AdministratorComponent },
    { path: 'users', component: RegisteredUsersComponent, children:[
      { path: ':id/:name', component: RegisteredUserComponent }
    ] },
    { path: 'about', component: AboutComponent },
    { path: 'gallery/:email/:firstname/:lastname', component: GalleryComponent, canActivate: [AuthGuard] },
    { path: 'trailers/:email/:firstname/:lastname', component: TrailersComponent, canActivate: [AuthGuard] },
    { path: 'videoGallery', component: GalleryVideoComponent, children:[
      { path: ':id', component: GalleryVideoDisplayComponent, canActivate: [AuthGuard] }
    ] },   
    { path: 'videoTrailers', component: TrailersVideoComponent, children:[
      { path: ':id', component: TrailersVideoDisplayComponent, canActivate: [AuthGuard] }
    ] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}