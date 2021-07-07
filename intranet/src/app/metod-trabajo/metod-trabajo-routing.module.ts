import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodTrabajoPage } from './metod-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: MetodTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodTrabajoPageRoutingModule {}
