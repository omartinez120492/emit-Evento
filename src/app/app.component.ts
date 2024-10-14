import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  public users: User[] = [
    {
      name: 'John',
      lastName: 'Doe',
      phone: '1234567890'
    },
    {
      name: 'Jane',
      lastName: 'Doe',
      phone: '1234567890'
    }
  ];  

  public addUser(user: User): void {
    this.users.push(user);
  }

}
