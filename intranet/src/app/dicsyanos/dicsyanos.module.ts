import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicsyanosPageRoutingModule } from './dicsyanos-routing.module';

import { DicsyanosPage } from './dicsyanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicsyanosPageRoutingModule
  ],
  declarations: [DicsyanosPage]
})
export class DicsyanosPageModule {}
