import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecHumanosPageRoutingModule } from './rec-humanos-routing.module';

import { RecHumanosPage } from './rec-humanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecHumanosPageRoutingModule
  ],
  declarations: [RecHumanosPage]
})
export class RecHumanosPageModule {}
