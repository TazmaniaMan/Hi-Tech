import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlarPage } from './controlar.page';

const routes: Routes = [
  {
    path: '',
    component: ControlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlarPageRoutingModule {}
