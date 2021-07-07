import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesSofPageRoutingModule } from './tes-sof-routing.module';

import { TesSofPage } from './tes-sof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesSofPageRoutingModule
  ],
  declarations: [TesSofPage]
})
export class TesSofPageModule {}
