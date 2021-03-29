import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaReferidoPageRoutingModule } from './programa-referido-routing.module';

import { ProgramaReferidoPage } from './programa-referido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaReferidoPageRoutingModule
  ],
  declarations: [ProgramaReferidoPage]
})
export class ProgramaReferidoPageModule {}
