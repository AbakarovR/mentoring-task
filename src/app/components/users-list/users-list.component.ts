import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../interface/users-interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);
  users: User[] = [];
}
