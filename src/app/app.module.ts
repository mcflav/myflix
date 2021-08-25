import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdministratorModule } from './administrator/administrator.module';
import { AboutModule } from './about/about.module';
import { CreatorsModule } from './creators/creators.module';
import { GalleryModule } from './gallery/gallery.module';
import { LoginModule } from './login/login.module';
import { PlansModule } from './plans/plans.module';
import { ProducersModule } from './producers/producers.module';
import { RegisterModule } from './register/register.module';
import { TrailersModule } from './trailers/trailers.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ShowHidePasswordModule,
    HttpClientModule,
    AdministratorModule,
    AboutModule,
    CreatorsModule,
    GalleryModule,
    LoginModule,
    PlansModule,
    ProducersModule,
    RegisterModule,
    TrailersModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
