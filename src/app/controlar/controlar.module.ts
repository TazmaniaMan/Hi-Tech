import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlarPageRoutingModule } from './controlar-routing.module';

import { ControlarPage } from './controlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlarPageRoutingModule
  ],
  declarations: [ControlarPage]
})
export class ControlarPageModule {}
