import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5106/api/';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + "Usuario");
  }

  createUser(user: Partial<User>): Observable<any> {
    return this.http.post(this.apiUrl + "Usuario", user);
  }
}