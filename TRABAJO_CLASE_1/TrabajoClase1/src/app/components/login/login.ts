import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario: Usuario = {
    nombre: '',
    clave: ''
  };
}
