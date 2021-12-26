import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../TSfoder/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 URL = "http://localhost:3001"
  constructor( private http : HttpClient) { }

  login(user:User){
    return this.http.post<User>(`${this.URL}/login`,user)
  }
}
