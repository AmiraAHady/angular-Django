import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce APP';
  app_header="https://images.bauerhosting.com/empire/2022/01/EMPIRE-100-Greatest-Movies-List.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
  disabled=false

  changeState(){
    this.disabled=!this.disabled
  }

}
