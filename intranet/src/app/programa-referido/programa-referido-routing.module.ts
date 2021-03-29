import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaReferidoPage } from './programa-referido.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaReferidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaReferidoPageRoutingModule {}
