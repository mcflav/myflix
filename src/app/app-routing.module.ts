import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    { path: 'administrator', loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)},
    { path: 'creators', loadChildren: () => import('./creators/creators.module').then(m => m.CreatorsModule)},
    { path: 'gallery/:email/:firstname/:lastname', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)},
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    { path: 'plans/:email/:firstname/:lastname', loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule)},
    { path: 'producers', loadChildren: () => import('./producers/producers.module').then(m => m.ProducersModule)},
    { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
    { path: 'trailers/:email/:firstname/:lastname', loadChildren: () => import('./trailers/trailers.module').then(m => m.TrailersModule)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}