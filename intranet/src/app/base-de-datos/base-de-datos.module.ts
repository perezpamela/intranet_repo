import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseDeDatosPageRoutingModule } from './base-de-datos-routing.module';

import { BaseDeDatosPage } from './base-de-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseDeDatosPageRoutingModule
  ],
  declarations: [BaseDeDatosPage]
})
export class BaseDeDatosPageModule {}
