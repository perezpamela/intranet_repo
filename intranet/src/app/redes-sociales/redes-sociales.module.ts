import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesSocialesPageRoutingModule } from './redes-sociales-routing.module';

import { RedesSocialesPage } from './redes-sociales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesSocialesPageRoutingModule
  ],
  declarations: [RedesSocialesPage]
})
export class RedesSocialesPageModule {}
