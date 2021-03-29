import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstructuraDicsysPageRoutingModule } from './estructura-dicsys-routing.module';

import { EstructuraDicsysPage } from './estructura-dicsys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstructuraDicsysPageRoutingModule
  ],
  declarations: [EstructuraDicsysPage]
})
export class EstructuraDicsysPageModule {}
