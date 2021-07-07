import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinteligPageRoutingModule } from './bintelig-routing.module';

import { BinteligPage } from './bintelig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinteligPageRoutingModule
  ],
  declarations: [BinteligPage]
})
export class BinteligPageModule {}
