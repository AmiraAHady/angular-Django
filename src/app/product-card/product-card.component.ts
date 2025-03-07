import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  constructor(){
    console.log('inside product card component');
    
  }
  ngOnInit(){
    // init value from api call
    console.log('inside ngOnInit');
    
  }

}
