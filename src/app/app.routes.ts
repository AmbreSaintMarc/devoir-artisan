import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details/details.component';
import { PageInBuildingComponent } from './components/page-in-building/page-in-building.component';
import { Page404Component } from './components/page404/page404.component';
import { CategoryBuildingComponent } from './components/category-building/category-building.component';
import { CategoryFoodComponent } from './components/category-food/category-food.component';
import { CategoryServiceComponent } from './components/category-service/category-service.component';
import { CategoryManufacturingComponent } from './components/category-manufacturing/category-manufacturing.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        
    },
    {
        path:'building',
        component: CategoryBuildingComponent,
        
    },
    {
        path:'food',
        component: CategoryFoodComponent,
        
    },
    {
        path:'services',
        component: CategoryServiceComponent,
        
    },
    {
        path:'manufacturing',
        component: CategoryManufacturingComponent,
        
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
