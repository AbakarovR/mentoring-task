import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  apiService: any;

  getUsers() {
    return this.apiService.getUsers('https://jsonplaceholder.typicode.com/users')
  }
}
