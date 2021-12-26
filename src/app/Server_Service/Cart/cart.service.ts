import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Check } from '../TSfoder/Check_cart';
import { Item } from '../TSfoder/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  URL = "http://localhost:3001"
  constructor(private http:HttpClient) { }
  getCart(product: any){
    return this.http.get<Item>(`${this.URL}/api/viewCart/${product}`)
  }
  getTongTien(product:any){
    return this.http.get<Item>(`${this.URL}/api/viewTong/${product}`)
  }
  deleteItem(id:number){
    return this.http.delete<Item>(`${this.URL}/api/delete/${id}`)
  }
  UpdateItem(id:Item){
    return this.http.put<Item>(`${this.URL}/api/fix/`,id)
  }
  CheckCart(id: any){
   return this.http.post<Check>(`${this.URL}/check/`,id)
  }
}
