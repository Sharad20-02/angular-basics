import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatatwoService {
  items: any[] = [
    { name: 'mobile1', price: '1500' },
    { name: 'mobile2', price: '1500' },
    { name: 'mobile3', price: '1500' },
    { name: 'mobile4', price: '1500' },
    { name: 'mobile5', price: '1500' },
    { name: 'mobile6', price: '1500' },
    { name: 'mobile7', price: '1500' },
    { name: 'mobile8', price: '1500' },
  ];

  cart: any[] = [];

  getitems = () => {
    return this.items;
  };

  getcart = () => {
    return this.cart;
  };

  addtocart = (item: any) => {
    this.cart.push(item);
  };
  getcost = () => {
    let sum = 0;
    // this.cart.map((item: any) => {
    //   sum += Number(item.price);
    // });
    for (let i = 0; i < this.cart.length; i++) {
      sum += Number(this.cart[i].price);
    }
    return sum;
  };
  constructor() {}
}
