import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  selectedCategory: string = '';
  precio: number = 0;
  fechaLanzamiento: string = '';
  descuento: number = 0 ;

  objetosFiltrados: any[] = []; // Arreglo para almacenar objetos filtrados

  constructor (private router: Router) { }

  volverAlMenuPrincipal() {
    this.router.navigate(['/controlar']); // Reemplaza 'menu-principal' con la ruta real de tu menú principal.
  }

  // Función para modificar el objeto
  EliminarObjeto() {
    // Agrega tu lógica de modificación aquí
    console.log('Eliminar objeto');
  }





  ngOnInit() {
  }

}
