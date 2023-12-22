import { Component } from '@angular/core';
import { DatatwoService } from '../datatwo.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private datatwoService: DatatwoService) {
    this.cart = this.datatwoService.getcart();
    this.cost = this.datatwoService.getcost();
  }

  cart: any[] = [];
  cost: number = 0;
}
