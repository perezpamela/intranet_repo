import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosUtilesPageRoutingModule } from './datos-utiles-routing.module';

import { DatosUtilesPage } from './datos-utiles.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosUtilesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatosUtilesPage]
})
export class DatosUtilesPageModule {}
