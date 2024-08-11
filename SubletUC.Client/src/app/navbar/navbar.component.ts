import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentUser?: User;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
  }
}

