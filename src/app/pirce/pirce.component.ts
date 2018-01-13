import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pirce',
  template:`
  <div class="app-pirce">\${{price}}</div>  `
})
export class PirceComponent implements OnInit {
@Input()price:number;
  constructor() { }

  ngOnInit() {
  }

}
