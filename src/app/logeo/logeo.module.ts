import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogeoPageRoutingModule } from './logeo-routing.module';

import { LogeoPage } from './logeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogeoPageRoutingModule
  ],
  declarations: [LogeoPage]
})
export class LogeoPageModule {}
