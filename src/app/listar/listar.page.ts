import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {



  categoriaSeleccionada: string = ''; // Filtro por categorias
  precioMaximo: number = 0; // precio máximo (falta el minimo)
  fechaLanzamiento: string = ''; // fecha de lanzamiento
  tieneDescuento: boolean = false; // indicar si tiene descuento

  objetosFiltrados: any[] = []; // Arreglo para almacenar objetos filtrados

  // Función para aplicar los filtros

  aplicarFiltros() {
    // hay que implementar la logica de filtrado de items
  }



  constructor (private router: Router) { }

  volverAlMenuPrincipal() {
    this.router.navigate(['/controlar']); 
  }

  ngOnInit() {
  }

}
