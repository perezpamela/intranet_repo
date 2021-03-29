import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesosOrgPageRoutingModule } from './procesos-org-routing.module';

import { ProcesosOrgPage } from './procesos-org.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesosOrgPageRoutingModule
  ],
  declarations: [ProcesosOrgPage]
})
export class ProcesosOrgPageModule {}
