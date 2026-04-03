import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrabajoClase1');
  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;
  promedio: number = 0;
  usuario =signal<Usuario>({  // aca esoy ahciendo al usuario signal 
    nombre: '',
    clave: ''
  });

  listaUsuarios: Usuario[] = [];

  resetear(evento: Event){
    this.numeroUno = 0;
    this.numeroDos = 0;
    this.resultado = 0;
    this.promedio = 0;
  }
  Calcular(evento: Event){
    this.listaUsuarios.push(this.usuario());
    this.resultado = this.numeroUno + this.numeroDos;
    this.promedio = this.resultado / 2;
  }
  }
