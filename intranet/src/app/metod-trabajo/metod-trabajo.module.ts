import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodTrabajoPageRoutingModule } from './metod-trabajo-routing.module';

import { MetodTrabajoPage } from './metod-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodTrabajoPageRoutingModule
  ],
  declarations: [MetodTrabajoPage]
})
export class MetodTrabajoPageModule {}
