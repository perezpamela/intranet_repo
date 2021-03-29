import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesosOrgPage } from './procesos-org.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesosOrgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesosOrgPageRoutingModule {}
