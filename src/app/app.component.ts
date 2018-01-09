import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [new Product(
      'NICEHAT',
      'ABC Pname',
      'URL Here',
      ['Men', 'Accesories', 'Hat'],
      'Europe',
      10.00),
    new Product(
      ' Product2 NICEHAT',
      'ABC Pname',
      'URL Here',
      ['Men', 'Accesories', 'Hat'],
      'Europe',
      20.00
    ),
    new Product(
      ' Product 3 NICEHAT',
      'ABC Pname',
      'URL Here',
      ['Men', 'Accesories', 'Hat'],
      'Europe',
      30.00
    ),
    new Product(
      ' Product4 NICEHAT',
      'ABC Pname',
      'URL Here',
      ['Men', 'Accesories', 'Hat'],
      'Europe',
      40.00
    ),
    ];
  }
  productWasSelected(product:Product):void{
    console.log('Product Clicked:',product);
  }

}
