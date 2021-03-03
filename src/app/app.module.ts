import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideoDisplayComponent } from './gallery/videoDisplay/videoDisplay.component';
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

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'creators', component: CreatorsComponent },
    { path: 'producers', component: ProducersComponent },
    { path: 'administrator', component: AdministratorComponent },
    { path: 'users', component: RegisteredUsersComponent },
    { path: 'users/:id/:name', component: RegisteredUserComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/:title/:producer/:director/:actors/:description/:file', component: VideoDisplayComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    VideoDisplayComponent,
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
    RegisteredUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
