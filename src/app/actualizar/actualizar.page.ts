import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

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
  modificarObjeto() {
    // Agrega tu lógica de modificación aquí
    console.log('Modificar objeto');
  }

  // Función para guardar el objeto
  guardarObjeto() {
    // Agrega tu lógica de guardado aquí
    console.log('Guardar objeto');
  }

  // Función para publicar el objeto
  publicarObjeto() {
    // Agrega tu lógica de publicación aquí
    console.log('Publicar objeto');
  }

  ngOnInit() {
  }

}
