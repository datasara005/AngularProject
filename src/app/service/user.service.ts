import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    let apiUrl = 'http://172.104.132.244:8080/User';

    return this.http.get<UserModel[]>(apiUrl);
  }
  getUserById(id:number): Observable<UserModel> {
    let apiUrl = 'http://172.104.132.244:8080/User/'+id;

    return this.http.get<UserModel>(apiUrl);
  }
}

