import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// component decorator,Component Directive
@Component({
  // <app-products><app-products/>
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,FormsModule,MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {
  hidden = false;
  searchValue="product 1"
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
