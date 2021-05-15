import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedasActivasPageRoutingModule } from './busquedas-activas-routing.module';

import { BusquedasActivasPage } from './busquedas-activas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedasActivasPageRoutingModule
  ],
  declarations: [BusquedasActivasPage]
})
export class BusquedasActivasPageModule {}
