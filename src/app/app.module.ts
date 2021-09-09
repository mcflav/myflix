import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';
import { HomeComponent } from './home/home.component';
import { GalleryRoutingModule } from './gallery/gallery-routing.module';
import { TrailersRoutingModule } from './trailers/trailers-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryRoutingModule,
    TrailersRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
