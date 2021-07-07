import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesSofPageRoutingModule } from './des-sof-routing.module';

import { DesSofPage } from './des-sof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesSofPageRoutingModule
  ],
  declarations: [DesSofPage]
})
export class DesSofPageModule {}
