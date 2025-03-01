import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtisanListComponent } from './components/artisan-list/artisan-list.component';
import { ArtisanPageComponent } from './components/artisan-page/artisan-page.component';
import { PageInBuildingComponent } from './components/page-in-building/page-in-building.component';
import { Page404Component } from './components/page404/page404.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        
    },
    {
        path:'list',
        component: ArtisanListComponent,
        
    },
    {
        path:'details',
        component: ArtisanPageComponent,
        
    },
    {
        path:'in-progress',
        component: PageInBuildingComponent,
        
    },
    {
        path:'page-404',
        component: Page404Component,
        
    }
];
