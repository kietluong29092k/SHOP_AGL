import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../TSfoder/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  URL = "http://localhost:3001"
  constructor(private http: HttpClient) { }
  addUser(user: User){
    return this.http.post<User>(`${this.URL}/register`,user).pipe()
  }
}
