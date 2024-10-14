import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  
  @Output() agregarUsuario: EventEmitter<User> = new EventEmitter<User>();

  public user: User = {
    name: '',
    lastName: '',
    phone: ''
  }

  public addUser(): void {
    if(this.user.name.length < 3) return;
    
    this.agregarUsuario.emit(this.user);

    this.user = {
      name: '',
      lastName: '',
      phone: ''
    }
  }


}
