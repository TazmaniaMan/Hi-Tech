import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {


    nombreObjeto: string = ''; // nombre del item
    descripcionObjeto: string = ''; // descripcion del item
    precioObjeto: number = 0; // precio del item
    imagenObjeto: string | ArrayBuffer = ''; // agregar imagen (ta en string pa que tome xd)

    // Función para importar imagen (no definida)
    seleccionarImagen() {

    }

    // Función para agregar el item
    agregarObjeto() {

    }

    constructor (private router: Router) { }

    volverAlMenuPrincipal() {
      this.router.navigate(['/controlar']); // Reemplaza 'menu-principal' con la ruta real de tu menú principal.
    }

  ngOnInit() {
  }

}
