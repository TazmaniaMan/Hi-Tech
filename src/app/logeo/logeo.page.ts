import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.page.html',
  styleUrls: ['./logeo.page.scss'],
})
export class LogeoPage implements OnInit {

  imageUrl: string = 'assets/6681204.png';

  constructor(
    private loadingController: LoadingController,
    private router: Router
  ) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesion',
      spinner: 'crescent'
    });
    await loading.present();

    // Simula un tiempo de carga 
    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/controlar']); // Agregar esta línea para redirigir
    }, 2000);
  }

  contrasena: string = ''; // Variable para almacenar la contraseña

  validarContrasena(): boolean {
    return this.contrasena.length >= 8; // Validar que la contraseña tenga al menos 8 caracteres
  }


  ngOnInit() {
  }

  

}
