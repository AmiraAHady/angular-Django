import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
    // path ->component 
    
    {path:'',component:HomeComponent,title:'Home Page'},
    {path:'products',component:ProductsComponent},
    {path:'movies',component:MoviesComponent},
    {path:'moviedetails/:id',component:MovieDetailsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactusComponent},
    {path:'**',component:NotFoundComponent},
    
];
