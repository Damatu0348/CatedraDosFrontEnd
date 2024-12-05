import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user-services.service';
import { User } from '../../Interfaces/user'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  imports: [HttpClientModule, CommonModule],
  providers: [UserService]
})
export class UserListPageComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    },
    (error) => {
      console.error('Error al obtener usuarios:', error);
    });
  }
}