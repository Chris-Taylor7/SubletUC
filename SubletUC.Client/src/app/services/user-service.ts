import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {
  getCurrentUser(): import("../models/user").User {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'api/login';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
