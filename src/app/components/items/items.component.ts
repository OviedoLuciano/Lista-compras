import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id:0,
        title:'Manzana',
price: 10.5,
quantity: 4,
completed: false
      },
      {
        id:1,
        title:'Pan',
price: 8,
quantity: 5,
completed: true
      },
      {
        id:2,
        title:'Harina',
price: 20,
quantity: 2,
completed: false
      }

    ];
  }

  deleteItem(item:Item){
this.items = this.items.filter(x  => x.id !== item.id);
  }
}
