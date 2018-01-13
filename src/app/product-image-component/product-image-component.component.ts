import { Component, OnInit, HostBinding, Input } from '@angular/core';
//import { } from '@angular/core/src/metadata/directives';
import{Product}from '../product.model';

@Component({
  selector: 'app-product-image-component',
  template:`
  <img class="prduct-image" [src]="product.imageUrl">  
  `})
export class ProductImageComponentComponent implements OnInit {
@Input()product:Product;
@HostBinding('attr.class') cssClass='ui.small image';
  constructor() { }
  ngOnInit() {
  }

}
