import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../TSfoder/Item';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  URL = "http://localhost:3001"
  constructor(private http:HttpClient) { }
  getspbc(id:any){
   return this.http.get<Item>(`${this.URL}/api/getloai/${id}`)
  }

}
