import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../TSfoder/Item';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
   URL  = "http://localhost:3001"
  constructor(private http: HttpClient) { }
  view(id:number){
    return this.http.get<Item>(`${this.URL}/api/view/${id}`)
  }
  inserCart(product : Item){
    return this.http.post<Item>(`${this.URL}/cart`,product)
  }
  viewShow(id:string){
    return this.http.get<Item>(`${this.URL}/api/s/${id}`)
  }
}
