import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
 
 httpOptions={
   headers: {
     'Content-Type': 'application/json'
   }
 }
  url:string = 'http://localhost:3000/items';
items:Item[]= [ 
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
  
constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
return this.http.get<Item[]>(this.url)
    //return this.items;

  }
  addItem(item:Item):Observable<Item>{
   // this.items.unshift(item);
   return this.http.post<Item>(this.url, item, this.httpOptions)
  }
  toggleItem(item:Item):Observable<Item>{
return this.http.put<Item>(this.url + item.id, item, this.httpOptions)
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
}
}
