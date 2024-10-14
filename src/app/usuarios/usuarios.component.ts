import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: ``
})
export class UsuariosComponent {

  @Input() users: User[] = [];  

  public agregarUsuario(user: User): void {
    console.log('user en el componente padre', user);
    this.users.push(user);
  }

}
