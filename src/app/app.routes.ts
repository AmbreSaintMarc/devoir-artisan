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
        title: 'Accueil',
    },
    {
        path:'artisans-search/:category',
        component: ArtisanSearchComponent,
        title: 'Artisans',
        
    },
    {
        path:'artisans-search',
        redirectTo: 'artisans-search/',
        pathMatch: 'full',
        title: 'Artisans',
        
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title: 'Fiche artisan',
        
    },
    {
        path:'in-progress',
        component: PageInBuildingComponent,
        title: 'Page en construction',
        
    },
    {
        path:'**',
        component: Page404Component,
        title: 'Page 404',

    }
];
