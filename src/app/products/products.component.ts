import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
// component decorator
@Component({
  // <app-products><app-products/>
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {

}
