import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-controlar',
  templateUrl: './controlar.page.html',
  styleUrls: ['./controlar.page.scss'],
})
export class ControlarPage implements OnInit {

  isControlBarOpen = false; // Propiedad para controlar el estado de la barra de control

  toggleControlBar() {
    this.isControlBarOpen = !this.isControlBarOpen;}

  constructor(private router: Router) {

  }

  agregar() {this.router.navigate(['/agregar'])
    // Lógica para agregar //
  }

  listar() {this.router.navigate(['/listar']);
    // Lógica para listar //
  }

  actualizar() {this.router.navigate(['/actualizar']);
    // Lógica para actualizar //
  }

  eliminar() {this.router.navigate(['/eliminar']);
    // Lógica para eliminar //
  }

  ngOnInit() {
  }

  

}

