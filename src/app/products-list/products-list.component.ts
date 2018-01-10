/* rendering all products and track selected products */

import { Component, 
        OnInit,
        EventEmitter,
        Input,
        Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input()productList:Product[];   // gets input expected to receive from product model which is list of products
  @Output() onProductSelected:EventEmitter<Product>; // send data componet to outside world.

private currentProduct=Product;
constructor() {
  this.onProductSelected=new EventEmitter();
 }

clicked(product:Product):void{
  this.currentProduct=Product;
  this.onProductSelected.emit(product);
}
isSelected(product:Product):boolean{
if(!product||this.currentProduct){
  return false;
}
return product.sku===this.currentProduct.sku;
}
  ngOnInit() {
  }

}
