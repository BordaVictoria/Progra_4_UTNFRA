import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
@Component({
  selector: 'app-detalle-componente',
  imports: [],
  templateUrl: './detalle-componente.html',
  styleUrl: './detalle-componente.css',
})
export class DetalleComponente {
  productos : Producto[] = [
    {id: 1, nombre: 'Producto 1', precio: 10.99},
    {id: 2, nombre: 'Producto 2', precio: 19.99},
    {id: 3, nombre: 'Producto 3', precio: 5.49},
    {id: 4, nombre: 'Producto 4', precio: 15.00},
    {id: 5, nombre: 'Producto 5', precio: 7.25}
  ];
}
