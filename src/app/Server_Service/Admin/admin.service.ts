import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../TSfoder/Item';
import { loaisp } from '../TSfoder/loaisp';
import { User } from '../TSfoder/User';
import { Check } from '../TSfoder/Check_cart';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL = "http://localhost:3001"
  constructor(private http: HttpClient) { }
  getloaisp(){
    return this.http.get<loaisp>(`${this.URL}/api/loaisp`)
  }
  getsl(){
    return this.http.get<loaisp>(`${this.URL}/api/soluong`)
  }
  getslduyet(){
    return this.http.get<loaisp>(`${this.URL}/api/soluongduyet`)
  }
  getdsdd(){
    return this.http.get<loaisp>(`${this.URL}/api/xemdsdd`)
  }
  getdskh(){
    return this.http.get<loaisp>(`${this.URL}/api/xemdskh`)
  }
  gettong(){
    return this.http.get<loaisp>(`${this.URL}/api/xemdstongtien`)
  }
  gettongket(){
    return this.http.get<loaisp>(`${this.URL}/api/xemdstongket`)
  }
  postdsitem(product : Item){
    return this.http.post<Item>(`${this.URL}/dsitem`,product)
  }
  deleteItem(id:number){
    return this.http.delete<Item>(`${this.URL}/api/deletesp/${id}`)
  }
  getdsdd1(){
    return this.http.get<loaisp>(`${this.URL}/api/xemdsdd1`)
  }
  deleteuser(id:number){
    return this.http.delete<User>(`${this.URL}/api/deleteuser/${id}`)
  }
  update(product:Check){
    return this.http.put<Check>(`${this.URL}/api/uptinhtrang/`,product)
  }
  updateItem(product:Item){
    return this.http.put<Item>(`${this.URL}/api/updatedanhsachsp/`,product)
  }
  getslmua(product: any){
    return this.http.get<Item>(`${this.URL}/api/sldatmua/${product}`)
  }
  xemsp(item:Item){
    return this.http.post<Item>(`${this.URL}/xemchitietsp`,item)
  }
}
