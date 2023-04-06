import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  listofProducts: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listofProducts = [
      { chefid: '1', name: 'test', img: '', weight: 100, price: 200 },
      { chefid: '1', name: 'test 2', img: '', weight: 500, price: 400 },
      { chefid: '1', name: 'test 4', img: '', weight: 1000, price: 800 },
    ];
  }
}
