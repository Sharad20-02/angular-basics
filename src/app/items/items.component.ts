import { Component } from '@angular/core';
import { DatatwoService } from '../datatwo.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  constructor(private datatwoService: DatatwoService){
    this.items = this.datatwoService.getitems();
  };

  add = (item:any)=>{
    this.datatwoService.addtocart(item);
  }

  items: any[];
}
