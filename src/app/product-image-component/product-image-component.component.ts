import { Component, OnInit, HostBinding, Input } from '@angular/core';
import{Product}from '../product.model';

@Component({
  selector: 'app-product-image-component',
  templateUrl: './product-image-component.component.html'
  })
export class ProductImageComponentComponent implements OnInit {
@Input()product:Product;
@HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }
  ngOnInit() {
  }

}
