import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details/details.component';
import { PageInBuildingComponent } from './components/page-in-building/page-in-building.component';
import { Page404Component } from './components/page404/page404.component';
import { ArtisanSearchComponent } from './components/artisan-search/artisan-search.component';



export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'artisans-search/:category',
        component: ArtisanSearchComponent,
        
    },
    {
        path:'artisans-search',
        redirectTo: 'artisans-search/',
        pathMatch: 'full',
        
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        
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
