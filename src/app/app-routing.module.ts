import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// importacion direcciones de las opciones del menu CONTROLAR//

import { AgregarPage } from './agregar/agregar.page';
import { ListarPage } from './listar/listar.page';
import { ActualizarPage } from './actualizar/actualizar.page';
import { EliminarPage } from './eliminar/eliminar.page';
import { ControlarPage } from './controlar/controlar.page';
import { LogeoPage } from './logeo/logeo.page';

// Control de funciones url opciones : "controlar.page.ts" //

const routes: Routes = [

  { path: '', redirectTo: 'logeo', pathMatch: 'full' },
  { path: 'agregar', component: AgregarPage },
  { path: 'listar', component: ListarPage },
  { path: 'actualizar', component: ActualizarPage },
  { path: 'eliminar', component: EliminarPage },
  { path: 'controlar', component: ControlarPage },
  { path: 'logeo', component: LogeoPage },

  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'controlar',
    loadChildren: () => import('./controlar/controlar.module').then( m => m.ControlarPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'logeo',
    loadChildren: () => import('./logeo/logeo.module').then( m => m.LogeoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
